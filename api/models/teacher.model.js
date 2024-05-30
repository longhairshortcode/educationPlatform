import mongoose from "mongoose";
import {Schema} from "mongoose"

const teacherSchema = new Schema({
    firstName: {
        type: String,
        required: true,        
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true, 
    },
    password: {
        type: String,
        required: true,
    },
})

const Teacher = mongoose.model("Teacher", teacherSchema)
export default Teacher;