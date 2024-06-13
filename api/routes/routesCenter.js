import express from "express"
import auth from "auth.route.js"
import parent from "parent.route.js" 
import educator from "educator.route.js" 
import review from "review.route.js" 
import message from "message.route.js" 
import find from "find.route.js" 
import conference from "conference.route.js" 

const router = express.Router();

router.use('/auth', auth)
router.use('/parent', parent)
router.use('/educator',educator)
router.use('/review', review)
router.use('/message', message)
router.use('/find', find)
router.use('/conference', conference)


export default router 