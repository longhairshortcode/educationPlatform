import express from "express"
import {Educator} from "../controllers/controllerCenter.js"
const router = express.Router();

router.post('/create-profile',Educator.createEducatorProfile)
router.put('/edit-profile', Educator.editEducatorProfile)
router.get('/profile/:tutorId', Educator.getEducatorProfile)
// router.post('/upload-image',  uploadEducatorImage)
// router.delete('/delete-image',  deleteEducatorImage)

export default router