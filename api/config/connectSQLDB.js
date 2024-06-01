import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',  // Use 'localhost' or the appropriate hostname, not the port number
  user: 'root',
  password: 'SQLhw24!',
  database: 'educationplatform'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Export the connection
export default connection;