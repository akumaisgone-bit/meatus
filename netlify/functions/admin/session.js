const { requireAdmin } = require('../../../lib/auth');

const sessionHandler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify({ ok: true, email: event.admin.email })
  };
};

// Protect the session route using the requireAdmin middleware
exports.handler = requireAdmin(sessionHandler);
