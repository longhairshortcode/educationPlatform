
//IMPORTS
import express from "express"
// import connectDB from "./config/db.js"
import {connection} from './config/database.js';  
import dotenv from "dotenv"
import router from "./routes/auth.route.js"

//INITIALIZE MY EXPRESS APP
const app = express()

//CONFIGS
dotenv.config()
// // Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});


//CALLING ROUTE FILES
app.use(router)

//CONNECT DB (will be in seperate file, will be in config folder)


//LISTEN FOR INCOMING REQUEST (OPEN PORT to listen to incoming request)
app.listen(5000, ()=>{
    // connectDB();
   
    console.log("Server is running on 5000")
}) 


//HANDLE FILE PATHS (PICS)



