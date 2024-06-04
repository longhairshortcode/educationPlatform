import express from "express";
import { signUp } from "../controllers/user.js";
const router = express.Router();

// http
router.post("/sign-up", signUp)

router.post("/login", () =>{
    console.log("You are in the log-in route")
})

router.post("/log-out", () => {
    console.log("You are in the log-out route")
})

export default router;