import {addUserQuery, getUserQuery, connection} from '../config/database.js'
import bcrypt from "bcrypt"


// const [res] = await connection.query("select * from user where (name == ?)", [name])

export const signUp = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    console.log(firstName, lastName, email, password)
    const existingUser =  connection.query("select email from user where (email == ?)", [email], (err, data) => {
        if(err){
            return res.status(500).json({err})
        }return data 
    })
    console.log("users: ", existingUser)
    if (existingUser) {
        return res.status(500).json({
            message: "User with this email already exists. Log in or create a new user with a different email."
        })
    }
    console.log("users: ", existingUser)
    const hashedPassword = await bcrypt.hash(password, 10)
    await connection.query("insert into user VALUES (?, ?, ?, ?)", [firstName, lastName, email, hashedPassword], (err, data) => {
        if(err){
            return res.status(501).json({err});
        }return res.status(201).json({data});
    })
}


export const login = async (req, res) => {

}


export const logout = async (req, res) => {

}