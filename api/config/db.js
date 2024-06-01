import mongoose from "mongoose"

const connectDB = async () => { 
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected")
    }catch(e){
        console.log("Database did not connect due to this error: ", e)
    }
}

export default connectDB;