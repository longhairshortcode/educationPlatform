import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database is connected")
})
.catch((e)=>{
    console.log("DB did not connect")
})

app.listen(5000, ()=>{
    console.log("Server is running on 5000")
}) 


