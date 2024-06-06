// Import mysql to be able to use it here
import mysql from 'mysql2';
import dotenv from "dotenv"

dotenv.config()

//how to connect to mysql db
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SQLhw24!",
  database: "educationplatform"
});

//sql syntax to addUser query
//Q: so line 18 is awaiting connecting to db then initiating query which is the 
//command in () after conection.query and once that is done (it can be 3 dif results) 
//the [res] sent to controller which then sends the res to FE (or BE terminal?) via res.json({result})?
export async function addUserQuery(name, lastname) {
  // const [res] = await connection.query("insert into user ("names","lastname") values (?);", [name, lastname])
  return [res] 
}


//sql syntax to getUser query
export async function getUserQuery(name){
  const [res] = await connection.query("select * from user where (name == ?)", [name])
  return [res]
}
