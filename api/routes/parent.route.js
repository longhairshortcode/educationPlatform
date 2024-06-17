import express from "express"
import {Parent} from "../controllers/controllerCenter.js"
const router = express.Router();

router.post('/create-profile', Parent.createParentProfile)
router.put('/edit-profile', Parent.editParentProfile)
router.get('/profile/:tutorId', Parent.getParentProfile)
// router.post('/upload-image',  uploadParentImage)
// router.delete('/delete-image',  deleteParentImage)

export default router 