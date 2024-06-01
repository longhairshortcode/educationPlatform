//IMPORTS
import express from "express"
// import connectDB from "./config/db.js"
import connection from './config/connectSQLDB.js';  
import dotenv from "dotenv"
import router from "./routes/auth.route.js"

//INITIALIZE MY EXPRESS APP
const app = express()

//CONFIGS
dotenv.config()

//CALLING ROUTE FILES
app.use(router)

//CONNECT DB (will be in seperate file, will be in config folder)


//LISTEN FOR INCOMING REQUEST (OPEN PORT to listen to incoming request)
app.listen(5000, ()=>{
    // connectDB();
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        if (err) throw err;
      
        console.log('The solution is: ', rows[0].solution);
      });
      
      connection.end();
    console.log("Server is running on 5000")
}) 


//HANDLE FILE PATHS (PICS)



