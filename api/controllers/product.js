import {addUserQuery, getUserQuery} from '../config/database.js'

export const  addsUser =  async (req, res) => {
    const {name, lastname } = req.body
    const result = await addUserQuery(name, lastname);
    res.json({result})
}



export const getUser = async (req, res) => {
    const {name} = req.body 
    const result = await getUserQuery(name);
    res.json({result})
}
