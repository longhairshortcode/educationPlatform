//IMPORTS (PACKAGES)
//framework for nodejs to make servers
import express from "express"
//hide variables in a different file for privacy 
import dotenv from "dotenv"
//see logs for each request
import morgan from "morgan"
//to understand and breakdown the json objects sent to BE
import bodyParser from "body-parser"
//security for who can make req to the BE
import cors from "cors"
//makes the request sizes smaller
import compression from "compression"
//another security like cors, research more - has to do with instructing the browsers on how to handle side securly, adds 
//extra lalayer of protection against various types of web-attacks
import helmet from "helmet"
//security so that user has a limit on incorrect passwords and other requests
import rateLimit from "express-rate-limit"
import cookieParser from 'cookie-parser';

// IMPORTS (FILES ) 
//import connectDB from "./config/db.js" -- maybe import db here too like mongo, optional SQL
import router from "./routes/routesCenter.js"
import {handleError} from "./utils/handleError.js"

//INITIALIZE MY EXPRESS APP
const app = express()

// QQQQ why tis here?  Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

//similar to above, will do a cors one



//CONFIGS features imported from online to be used in the whole project, aka using the things that you
//imported
dotenv.config()
app.use(cookieParser());

// app.use(limiter)
app.use(morgan('dev'))  
app.use(compression())
app.use(helmet())
app.use(cors({
    origin: ['http://localhost:5173'], 
    credentials: true, // allow credentials (cookies)
    methods : ["POST", "GET", "PUT", "DELETE"]
  }));

//Json Parsing Middleware
app.use(express.json()); // Middleware to parse JSON payloads, understand any json
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
// // Connect to the database


// ROUTE CONFIGURATION
app.use(router); // Router middleware using the imported router
//handle errors router
app.use(handleError)
//handle 404 (can't find path)
app.use((req, res, next) => {
res.status(404).json({
    message: "Path not found"
})
}) 
//CONNECT DB (will be in seperate file, will be in config folder), right now only connect to db when
//make a query


//LISTEN FOR INCOMING REQUEST (OPEN PORT to listen to incoming request)
app.listen(5000, ()=>{
    // connectDB();
   
    console.log("Server is running on 5000")
}) 


//HANDLE FILE PATHS (PICS)



