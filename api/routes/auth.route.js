import express from "express";
import {Auth} from "../controllers/controllerCenter.js"
const router = express.Router();

// http
router.post("/sign-up", Auth.signUp)

router.post("/login", Auth.login)


router.post("/log-out", Auth.logout)


export default router;