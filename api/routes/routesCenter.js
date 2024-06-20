import express from "express"
import Auth from "./auth.route.js"
import Parent from "./parent.route.js" 
import Educator from "./educator.route.js" 
import Review from "./review.route.js" 
import Message from "./message.route.js" 
import Find from "./find.route.js" 
import Conference from "./conference.route.js" 

const router = express.Router();

router.use('/auth', Auth)
router.use('/parent', Parent)
router.use('/educator', Educator)
router.use('/review', Review)
router.use('/message', Message)
router.use('/find', Find)
router.use('/conference', Conference)


export default router 