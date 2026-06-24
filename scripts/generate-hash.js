const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the plaintext password to hash with bcrypt: ', (password) => {
  if (!password) {
    console.error('Password cannot be empty.');
    rl.close();
    return;
  }
  
  console.log('\nHashing...');
  
  bcrypt.hash(password, 12, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
    } else {
      console.log('\n======================================');
      console.log('BCRYPT PASSWORD HASH (12 rounds):');
      console.log(hash);
      console.log('======================================\n');
      console.log('Create a document in MongoDB in the AdminUser collection with fields:');
      console.log(JSON.stringify({
        email: "admin@meatus.in",
        passwordHash: hash,
        lastLogin: new Date()
      }, null, 2));
      console.log('\n(Note: Keep the email in lowercase when querying or logging in)');
    }
    rl.close();
  });
});
