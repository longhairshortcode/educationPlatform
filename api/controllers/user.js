// using async await buy utils
// import bcrypt from 'bcrypt';
// import pool from '../config/database.js'; 
// import dotenv from 'dotenv';


// import { promisify } from 'util';

// dotenv.config();

// //The promisify function is a utility provided by Node.js as part of the util module.
// // It converts callback-based functions into Promise-based ones, making it 
// //easier to use modern JavaScript's async/await syntax for asynchronous operations.
// const query = promisify(pool.query).bind(pool);

// export const signUp = async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // Validate request data
//     if (!firstName || !lastName || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Check if user already exists
//     const existingUser = await query('SELECT * FROM user WHERE email = ?', [email]);
//     if (existingUser.length > 0) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new user into database
//     await query(
//       'INSERT INTO user (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?)',
//       [firstName, lastName, email, hashedPassword]
//     );

//     // Respond with success message
//     res.status(201).json({ message: 'User was created successfully' });
//   } catch (err) {
//     console.error('Error during sign up:', err.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };



// without using async await
import bcrypt from 'bcrypt';
import pool from '../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

export const signUp = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  pool.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error during email check:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error during password hashing:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      pool.query(
        'INSERT INTO user (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, hashedPassword],
        (err, results) => {
          if (err) {
            console.error('Error during user creation:', err.message);
            return res.status(500).json({ message: 'Internal server error' });
          }

          res.status(201).json({ message: 'User was created successfully' });
        }
      );
    });
  });
};


// PRO Level 
// import bcrypt from 'bcrypt';
// import pool from '../config/database.js';
// import dotenv from 'dotenv';
// import { promisify } from 'util';

// dotenv.config();

// const query = promisify(pool.query).bind(pool);

// const validateEmail = (email) => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// };

// export const signUp = async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // Input validation
//     if (!firstName || !lastName || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (!validateEmail(email)) {
//       return res.status(400).json({ message: 'Invalid email format' });
//     }

//     // Check if user already exists
//     const existingUser = await query('SELECT * FROM user WHERE email = ?', [email]);
//     if (existingUser.length > 0) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Hash password securely
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new user into the database
//     await query(
//       'INSERT INTO user (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?)',
//       [firstName, lastName, email, hashedPassword]
//     );

//     // Set a secure, HTTP-only cookie
//     res.cookie('token', 'yourGeneratedToken', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
//       maxAge: 3600000, // 1 hour
//     });

//     res.status(201).json({ message: 'User was created successfully' });
//   } catch (err) {
//     console.error('Error during sign up:', err.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
