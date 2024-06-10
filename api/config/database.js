import mysql from 'mysql2';

 const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "lhsc",
  password: "Pleasework24!",
  database: "educationplatform"
})

export default pool 