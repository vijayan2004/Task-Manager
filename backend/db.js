const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // or your MySQL password
  database: 'taskdb',
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

module.exports = connection;
