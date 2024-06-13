import express from "express"
const router = express.Router();

router.post('/start-conference', startConference)
 router.post('/end-conference', endConference)


export default router