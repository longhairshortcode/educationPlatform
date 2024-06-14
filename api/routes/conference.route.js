import express from "express"
import { startConference, endConference } from "../controllers/conference.controller";
const router = express.Router();

router.post('/start-conference', startConference)
router.post('/end-conference', endConference)


export default router