import express from "express"
import {Conference} from "../controllers/controllerCenter.js"
const router = express.Router();

router.post('/start-conference', Conference.startConference)
router.post('/end-conference', Conference.endConference)


export default router