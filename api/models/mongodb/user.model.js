import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema({
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
    role:{
        type: String,
        enum: ["teacher", "student", "parent"],
        default: "student",
    }
})

//I added this:
const User = mongoose.model("User", userSchema);
export default User;


//I'm used to doing it this way:
// import mongoose from "mongoose";


// const userSchema = new mongoose.Schema({
//     firstName:{
//         type: String,
//         required: true,
//     },
//     lastName:{
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     role:{
//         type: String,
//         enum: ["teacher", "student", "parent"],
//         default: "student",
//     }
// })
// export default mongoose.model("User", userSchema)