const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let cachedDb = null;

if (!uri) {
  console.warn('Warning: MONGODB_URI environment variable is not defined.');
}

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside your Netlify configuration or .env file.');
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(); // connects to the default database specified in the connection string or first database
  cachedDb = db;
  return db;
}

module.exports = { connectToDatabase };
