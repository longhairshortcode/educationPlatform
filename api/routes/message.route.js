import express from "express"
import { sendMessage, getMessage } from "../controllers/message.controller";
const router = express.Router();

router.post('/send-message', sendMessage)
//QQQQQQ this should be message singluar not plural right?
router.get('/get-message', getMessage)


export default router

