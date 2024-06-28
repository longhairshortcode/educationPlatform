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
            next(err)
        }
        
        
    }

    static async editEducatorProfile  (req, res, next)  {
        // const {error, value} = educatorProfileSchema.validate(req.body) 
        const {email} = req.user

        // if(error) {
        //     return res.status(400).json({
        //         message: error.details[0].message 
        //     })
            const {bio, profile_picture_url, time_zone, 
                subjects, grades, classes, location, 
                experience_years, education, certifications, 
                availability} = req.body
                const fieldsToEdit = []
                const value = []
                if (bio){
                    fieldsToEdit.push("bio = ?")
                    value.push(bio);
                }
                if (profile_picture_url){
                    fieldsToEdit.push("profile_picture_url = ?")
                    value.push(profile_picture_url);
                }
                if (time_zone){
                    fieldsToEdit.push("time_zone = ?")
                    value.push(time_zone)
                }
                if (subjects){
                    fieldsToEdit.push("subjects = ?")
                    value.push(subjects)
                }
                if (grades){
                    fieldsToEdit.push("grades = ?")
                    value.push(grades)
                }
                if (classes){
                    fieldsToEdit.push("classes = ?")
                    value.push(classes)
                }
                if (location){
                    fieldsToEdit.push("location = ?")
                    value.push(location)
                }
                if (experience_years){
                    fieldsToEdit.push("experience_years = ?")
                    value.push(experience_years)
                }
                if (education){
                    fieldsToEdit.push("education = ?")
                    value.push(education)
                }
                if (certifications){
                    fieldsToEdit.push("certifications = ?")
                    value.push(certifications)
                }
                if (availability){
                    fieldsToEdit.push("availability = ?")
                    value.push(availability)
                }
                
            try{
                const connection = await pool.getConnection()
                const q = `UPDATE educator SET ${fieldsToEdit.join(",")}  WHERE email = "${email}"`
                const result = await connection.query(q, value)
                res.status(201).json({message: 'Profile was edited successfully'})
            }catch(err){
                console.log(err)
                next(err)
            } 

        }

    
    // static async getEducatorProfile  (req, res, next)  {
    
    // }
}

export default Educator
