import express from "express"
import {message} from "../controller/controllerCenter.js"
const router = express.Router();

router.post('/send-message', message.sendMessage)
router.get('/get-messages', message.getMessage)


export default router

