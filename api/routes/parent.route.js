import express from "express"
import {parent} from "../controller/controllerCenter.js"
const router = express.Router();

router.post('/create-profile', parent.createParentProfile)
router.put('/edit-profile', parent.editParentProfile)
router.get('/profile/:tutorId', parent.getParentProfile)
// router.post('/upload-image',  uploadParentImage)
// router.delete('/delete-image',  deleteParentImage)

export default router 