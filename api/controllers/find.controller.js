import pool from '../config/database.js';

class Find{

    static async showAllEducators (req, res, next) {
        const q = "SELECT * FROM educator"
        try{
            const connection = await pool.getConnection()
            const result = await connection.query(q)
            res.status(200).json(result[0])
        }catch(err){
            console.log('Problem while getting all educators: ', err)
            res.status(500).json({message : err})
        }
    }

    static async searchAllEductors (req, res, next)  {
    
    } 
     
     static async filterEducatorBySubject  (req, res, next)  {
    
    }
     static async filterEducatorByClass (req, res, next)  {
    
    }
    static async filterEducatorByGrade  (req, res, next)  {
    
    }
}

export default Find
