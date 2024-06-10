
//IMPORTS
import express from "express"
// import connectDB from "./config/db.js"
import dotenv from "dotenv"
import router from "./routes/auth.route.js"
import morgan from "morgan"
import bodyParser from "body-parser"

//INITIALIZE MY EXPRESS APP
const app = express()
//Json Parsing Middleware
app.use(express.json()); // Middleware to parse JSON payloads

//CONFIGS
dotenv.config()
app.use(morgan('dev'))
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
// // Connect to the database


// ROUTE CONFIGURATION
app.use(router); // Router middleware using the imported router

//CONNECT DB (will be in seperate file, will be in config folder)


//LISTEN FOR INCOMING REQUEST (OPEN PORT to listen to incoming request)
app.listen(5000, ()=>{
    // connectDB();
   
    console.log("Server is running on 5000")
}) 


//HANDLE FILE PATHS (PICS)



