import express from "express"
import {conference} from "../controller/controllerCenter.js"
const router = express.Router();

router.post('/start-conference', conference.startConference)
router.post('/end-conference', conference.endConference)


export default router