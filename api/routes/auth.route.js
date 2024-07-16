import express from "express";
import {Auth} from "../controllers/controllerCenter.js"
const router = express.Router();

// http

router.post("/loginParent", Auth.loginParent)
router.post("/loginEducator", Auth.loginEducator)

router.post("/signup", Auth.signUp)

router.post("/logout", Auth.logout)


export default router;