import pool from '../config/database.js';

class Find{

    static async showAllTutors (req, res, next) {
        const q = "SELECT * FROM educator"
        try{
            const connection = await pool.getConnection()
            const [result] = await connection.query(q)
            res.status(200).json([result])
        }catch(err){
            console.log('Problem while getting all educators: ', err)
            
        }
    }

    static async searchAllTutors  (req, res, next)  {
    
    } 
     static async filterTutorsByRate   (req, res, next)  {
    
    } 
     static async filterTutorsBySubject  (req, res, next)  {
    
    }
     static async lterTutorsByClass (req, res, next)  {
    
    }
    static async lterTutorsByGrade  (req, res, next)  {
    
    }
}

export default Find
