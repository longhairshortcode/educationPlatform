import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastNmae:{
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
    role:{
        type: String,
        enum: ["teacher", "student", "parent"],
        default: "student",
    }
})