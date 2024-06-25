import educatorProfileSchema from "../utils/validateEducatorProfile.js"
import pool from '../config/database.js'

class Educator {
    static async createEducatorProfile  (req, res, next)  {
        const { error, value } = educatorProfileSchema.validate(req.body);
        const {email } = req.user

        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const {bio, profile_picture_url, time_zone, 
        subjects, grades, classes, location, 
        experience_years, education, certifications, 
        availability} = req.body

        try {
            const connection = await pool.getConnection()
            const q = 'UPDATE educator SET bio = ?, profile_picture_url = ?, time_zone = ?, subjects = ?, grades = ?, classes = ?, location = ?, experience_years = ?, education = ?, certifications = ?, availability = ? WHERE email = ?';
            const result = await connection.query(q, [bio, profile_picture_url, time_zone, 
                subjects, grades, classes, location, 
                experience_years, education, certifications, 
                availability, email])
        res.status(201).json({message: 'Profile was created successfully'})
        }catch(err){
            console.log(err)
            res.status(500).json({err})
        }
        
        
    } 
    static async editEducatorProfile  (req, res, next)  {
    
    } 
    static async getEducatorProfile  (req, res, next)  {
    
    }
}

export default Educator
