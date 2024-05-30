//IMPORTS
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

//INITIALIZE MY EXPRESS APP?
const app = express()

//CONFIGS?
dotenv.config()

//CONNECT DB?
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database is connected")
})
.catch((e)=>{
    console.log("DB did not connect")
})

//LISTEN FOR INCOMMING REQUEST?
app.listen(5000, ()=>{
    console.log("Server is running on 5000")
}) 


