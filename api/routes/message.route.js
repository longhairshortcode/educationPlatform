import express from "express"
const router = express.Router();

router.post('/send-message', sendMessage)
 router.get('/get-messages', getMessages)


export default router

