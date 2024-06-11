import express from "express";
import { signUp, login, logOut } from "../controllers/user.js";
const router = express.Router();

// http
router.post("/sign-up", signUp)

router.post("/login", login)


router.post("/log-out", logOut)


export default router;