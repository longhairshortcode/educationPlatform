import express from "express"
import {educator} from "../controller/controllerCenter.js"
const router = express.Router();

router.post('/create-profile', educator.createEducatorProfile)
router.put('/edit-profile', educator.editEducatorProfile)
router.get('/profile/:tutorId', educator.getEducatorProfile)
// router.post('/upload-image',  uploadEducatorImage)
// router.delete('/delete-image',  deleteEducatorImage)

export default router