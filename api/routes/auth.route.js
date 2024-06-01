import express from "express";
const router = express.Router();


router.post("/sign-up", () => {
    console.log("You are in the sign-up route")
} )

router.post("/login", () =>{
    console.log("You are in the log-in route")
})

router.post("/log-out", () => {
    console.log("You are in the log-out route")
})

export default router;