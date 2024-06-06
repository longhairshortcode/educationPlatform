// import {addUserQuery, getUserQuery, connection} from '../config/database.js'
import bcrypt from "bcrypt"
import pool from "../config/database.js"


// const [res] = await connection.query("select * from user where (name == ?)", [name])

export const signUp = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    console.log(firstName, lastName, email, password)
    
    // const existingUser =  connection.query(`select email from user where (email == ?)`, [email], (err, data) => {})
    const hashedPassword = await bcrypt.hash(password, 10)
    const connection = pool.getConnection()
    // try{
        await connection.query('insert into user VALUES (?, ?, ?, ?)', [firstName, lastName, email, hashedPassword], (err, data) => {
        if(err) {throw err}
        return data;})    
        console.log("user what created")
//     }
//    finally{
//     connection.release();
//    } 
}


export const login = async (req, res) => {

}


export const logout = async (req, res) => {

}












