import express from "express"
import {Message} from "../controllers/controllerCenter.js"
const router = express.Router();

router.post('/send-message', Message.sendMessage)
router.get('/get-messages', Message.getMessage)


export default router

