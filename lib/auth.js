const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { connectToDatabase } = require('./db');

// requireAdmin middleware wrapper for Netlify Functions
function requireAdmin(handler) {
  return async function(event, context) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type, Cookie',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': 'true'
    };

    if (event.headers.origin) {
      headers['Access-Control-Allow-Origin'] = event.headers.origin;
    } else {
      headers['Access-Control-Allow-Origin'] = '*';
    }

    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers, body: '' };
    }

    const cookiesHeader = event.headers.cookie || event.headers.Cookie || '';
    const cookies = cookie.parse(cookiesHeader);
    const token = cookies.session;

    if (!token) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Not authenticated' })
      };
    }

    try {
      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        throw new Error('JWT_SECRET environment variable is not defined.');
      }
      const decoded = jwt.verify(token, jwtSecret);
      event.admin = decoded;
      return await handler(event, context);
    } catch (err) {
      console.error('Auth verification error:', err.message);
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Session expired' })
      };
    }
  };
}

// Serverless rate-limiting helper using MongoDB
async function checkRateLimit(ip) {
  try {
    const db = await connectToDatabase();
    const limitCollection = db.collection('LoginLimit');
    const now = new Date();
    
    const record = await limitCollection.findOne({ ip });
    
    if (record) {
      const timeDiff = now - new Date(record.lastAttempt);
      
      // Reset rate limit count if the window (15 minutes) has elapsed
      if (timeDiff > 15 * 60 * 1000) {
        await limitCollection.updateOne(
          { ip },
          { $set: { attempts: 0, lastAttempt: now } }
        );
        return { blocked: false };
      }
      
      if (record.attempts >= 5) {
        return { blocked: true, remainingMs: 15 * 60 * 1000 - timeDiff };
      }
    }
    
    return { blocked: false };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // Fail-open: do not lock out the user if the rate limit collection has issues
    return { blocked: false };
  }
}

async function recordFailedAttempt(ip) {
  try {
    const db = await connectToDatabase();
    const limitCollection = db.collection('LoginLimit');
    const now = new Date();
    
    await limitCollection.updateOne(
      { ip },
      {
        $inc: { attempts: 1 },
        $set: { lastAttempt: now }
      },
      { upsert: true }
    );
  } catch (error) {
    console.error('Failed login attempt record error:', error);
  }
}

async function clearAttempts(ip) {
  try {
    const db = await connectToDatabase();
    const limitCollection = db.collection('LoginLimit');
    await limitCollection.deleteOne({ ip });
  } catch (error) {
    console.error('Clear login attempts error:', error);
  }
}

module.exports = {
  requireAdmin,
  checkRateLimit,
  recordFailedAttempt,
  clearAttempts
};
