import mongoose from "mongoose";
import {Schema} from "mongoose";

const studentSchema = new Schema({
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
 }
})

const Student = mongoose.model("User", userSchema);
export default User;
