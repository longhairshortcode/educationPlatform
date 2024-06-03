  //WITH SEQUALIZE
// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

//Load environment variables from .env file (to use PASSWORD that I hid in env)
// dotenv.config();

// SET UP SEQUELIZE
// Create a new Sequelize instance with database connection details
// const sequelize = new Sequelize('educationplatform', 'root', process.env.PASSWORD, {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// FUNCTION TO AUTHENTICATE AND SYNC SEQUELIZE
// Asynchronous function to authenticate the connection to the database and sync models
// const initializeDatabase = async () => {
//     try {
       // Attempt to authenticate the connection
      // await sequelize.authenticate();
      // console.log('Connection has been established successfully.');
       // Synchronize all defined models to the database
      // await sequelize.sync();
  //     console.log('Models synchronized successfully.');
  //   } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  //   }
  // };
  

  // export { sequelize, initializeDatabase };

  //WITHOUT SEQUALIZE
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',  // Use 'localhost' or the appropriate hostname, not the port number
  user: 'root',
  password: 'SQLhw24!',
  database: 'educationplatform'
});

// // Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// // Export the connection
export default connection;