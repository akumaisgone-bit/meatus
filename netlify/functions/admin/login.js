const { connectToDatabase } = require('../../../lib/db');
const { checkRateLimit, recordFailedAttempt, clearAttempts } = require('../../../lib/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.handler = async function(event, context) {
  // CORS and response headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, Cookie',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true'
  };

  // Determine origin safely for CORS
  if (event.headers.origin) {
    headers['Access-Control-Allow-Origin'] = event.headers.origin;
  } else {
    headers['Access-Control-Allow-Origin'] = '*';
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get client IP address from Netlify headers
  const clientIp = event.headers['client-ip'] || 
                   event.headers['x-nf-client-connection-ip'] || 
                   event.headers['x-forwarded-for'] || 
                   'unknown_ip';

  try {
    // 1. Check Rate Limit
    const limitStatus = await checkRateLimit(clientIp);
    if (limitStatus.blocked) {
      const minutesRemaining = Math.ceil((limitStatus.remainingMs || 900000) / (60 * 1000));
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({ error: `Too many attempts. Try again in ${minutesRemaining} minutes.` })
      };
    }

    const { email, password } = JSON.parse(event.body || '{}');

    if (!email || !password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email and password are required' })
      };
    }

    const db = await connectToDatabase();
    const admin = await db.collection('AdminUser').findOne({ email: email.toLowerCase().trim() });

    // Single generic check to avoid user enumeration
    if (!admin || !admin.passwordHash) {
      // Dummy check to prevent timing attacks
      await bcrypt.compare(password, '$2a$12$DummyHashDummyHashDummyHashDummyHashDummyHashDumm');
      await recordFailedAttempt(clientIp);
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid credentials' })
      };
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      await recordFailedAttempt(clientIp);
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid credentials' })
      };
    }

    // JWT Secret verification
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET environment variable is not defined.');
    }

    // Issue JWT token
    const token = jwt.sign(
      { adminId: admin._id, email: admin.email },
      jwtSecret,
      { expiresIn: '2h' }
    );

    // Set secure option
    const cookieSerialized = cookie.serialize('session', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 7200 // 2 hours
    });

    // Update last login
    await db.collection('AdminUser').updateOne(
      { _id: admin._id },
      { $set: { lastLogin: new Date() } }
    );

    // Clear failed attempts count upon successful login
    await clearAttempts(clientIp);

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Set-Cookie': cookieSerialized
      },
      body: JSON.stringify({ ok: true })
    };

  } catch (error) {
    console.error('Login function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
