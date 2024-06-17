import express from "express";
import {auth} from "../controllers/controllerCenter.js"
const router = express.Router();

// http
router.post("/sign-up", auth.signUp)

router.post("/login", auth.login)


router.post("/log-out", auth.logOut)


export default router;