const mysql = require('mysql2');

// Create a MySQL connection
const db = mysql.createConnection({
    host: '3.130.60.8',  // Correct EC2 MySQL Public IP
    user: 'pmp_user',
    password: 'Aprilv120!',
    database: 'pmp_quiz_db',
    connectTimeout: 10000 // Prevents hanging connections
});

// Connect to MySQL with error handling
db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        process.exit(1); // Exit process if the connection fails
    }
    console.log('✅ Connected to MySQL database!');
});

// Export the database connection
module.exports = db;
