import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {

try{
    const token = req.cookies['token']
    if (!token){
       return res.status(401).json({
           message: "No token provided, access denied"
       })
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY)
     req.user = decoded
    next()
}catch(err){
    console.log("Here is the err message: ", err.message)
}  
    

}

export {authenticate}