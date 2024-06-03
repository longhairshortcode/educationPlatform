// Import mysql to be able to use it here
import mysql from 'mysql2';
import dotenv from "dotenv"

dotenv.config()

//how to connect to mysql db
export const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.ROOT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

//sql syntax to addUser query
export async function addUserQuery(name, lastname) {
  const [res] = await connection.query("insert into user ("names","lastname") values (?);", [name, lastname])
  return [res] 
}

//sql syntax to getUser query
export async function getUserQuery(name){
  const [res] = await connection.query("select * from user where (name == ?)", [name])
  return [res]
}
