//Way 2
import bcrypt from 'bcrypt';
import pool from '../config/database.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'


class Auth {
  static async loginEducator (req, res) {
    const {email, password} = req.body
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Both fields are required' });
    }
    console.log("the email of educator", email)
    try{
      const connection = await pool.getConnection()
      const [resultEmail] = await connection.query('SELECT * FROM educator WHERE email = ? ', [email])
      console.log("here is the result od educator ", resultEmail)
      if (resultEmail[0].length == 0) {
        return res.status(409).json({ message: "User doesn't exist, please sign up first." }); 
    }
    const user = resultEmail[0]
    const hashedpassword = await bcrypt.hash(password, 10)

    console.log("encrypted ", hashedpassword)
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    
    if (!isPasswordCorrect){
      return res.status(401).json({
        message: "Password is incorrect, please try again."
      })
    }
    
    const token = jwt.sign({email}, process.env.JWT_KEY)  
    
    res.cookie('token', token, {
        httpOnly: true,
      });
      res.status(200).json({ message: 'User logged in successfully' });
  }catch(err){
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error', err });
  }
  }
  

  static async loginParent (req, res) {
    const {email, password} = req.body
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Both fields are required' });
    }
    console.log("the email", email)
    try{
      const connection = await pool.getConnection()
      const [resultEmail] = await connection.query('SELECT * from parent WHERE E.email = ?', [email])
      //console.log("here is the result ", resultEmail)
      if (resultEmail[0].length == 0) {
        return res.status(409).json({ message: "User doesn't exist, please sign up first." }); 
    }
    const user = resultEmail[0]
    console.log("here is the user: ", user)
    console.log("front pass", password)
    console.log("coming pass", user[0].passsword)
  const hashedpassword = await bcrypt.hash(password, 10)

    console.log("encrypted ", hashedpassword)
    const isPasswordCorrect = await bcrypt.compare(password, user[0].password)
    
    if (!isPasswordCorrect){
      return res.status(401).json({
        message: "Password is incorrect, please try again."
      })
    }
    
    const token = jwt.sign({email}, process.env.JWT_KEY)  
    
    res.cookie('token', token, {
        httpOnly: true,
      });
      res.status(200).json({ message: 'User logged in successfully' });
  }catch(err){
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error', err });
  }
  }
  
  
  
  // for signup, using async await since promisfy pool (connection) in database file, so no promises here 
  //and added try/catch 
  //QQQQ what does next() at the end do, why no sending message / console log?
  static async signUp  (req, res, next)  {
    const { firstName, lastName, email, password, role } = req.body;
    //check if all areas filled (more security than doing in the FE)
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
    //connect to db, use that connection to check if email already exists, if it does via length > 0, send already exists message
    //if doesn't exists, hash pw, then try/catch to create/save new user in db
    //
    try{
        const connection = await pool.getConnection()
        //check if user already exists
        if (role === "educator "){
          var resultEmail = await connection.query('SELECT email FROM educator WHERE email = ?', [email])
        } else {
          var resultEmail = await connection.query('SELECT email FROM parent WHERE email = ?', [email])

        }

  
        if (resultEmail[0].length > 0) {
          return res.status(409).json({ message: 'User already exists' });
        
    }
  const hashedpassword = await bcrypt.hash(password, 10)
  console.log("encrypted in register , ",hashedpassword)
  //as mentoined above, if hashing complete, connect to db and create new user
 
      if (role === "educator"){
        var resultNewUser = await connection.query('INSERT INTO educator (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'
        ,[firstName, lastName, email, hashedpassword])            
      }else {
        var resultNewUser = await connection.query('INSERT INTO parent (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'
        ,[firstName, lastName, email, hashedpassword])  
      }
        
                      // Set a secure, HTTP-only cookie 
    const token = jwt.sign({email}, process.env.JWT_KEY)  
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Strict', // Adjust sameSite attribute as needed (None, Lax, Strict)
    });
      console.log(token)

      res.status(201).json({ message: 'User was created successfully' }); 
              
   }catch(err){
    console.log("error ", err.message)
    res.status(500).json({message: err})
  }
  };
  
  
    static async logout(req, res, next){
      res.clearCookie('token', {
        httpOnly: true,
      });
      res.status(200).json({ message: 'User logged out successfully' });
    };
}


export default Auth 










//try /catch w async await and no promises like first example 
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
//     try{
//     const resultNewUser = await query('INSERT INTO user (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?)',
//       [firstName, lastName, email, hashedPassword]
//     );
//      }catch(err){
            // console.log(err)
//       }


//     // Set a secure, HTTP-only cookie ????????????
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
