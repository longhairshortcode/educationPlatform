import mysql from 'mysql2';

 const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "THISisOUSSAMA12/*",
  database: "newTest"
})

export default pool 