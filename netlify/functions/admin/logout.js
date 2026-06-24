const cookie = require('cookie');

exports.handler = async function(event, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, Cookie',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
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

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Clear cookie by setting past expiry date and Max-Age 0
  const cookieSerialized = cookie.serialize('session', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
    expires: new Date(0)
  });

  return {
    statusCode: 200,
    headers: {
      ...headers,
      'Set-Cookie': cookieSerialized
    },
    body: JSON.stringify({ ok: true })
  };
};
