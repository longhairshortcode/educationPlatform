import express from "express"
import { createParentProfile, editParentProfile, getParentProfile } from "../controllers/parent.controller";
const router = express.Router();

router.post('/create-profile', createParentProfile)
router.put('/edit-profile', editParentProfile)
router.get('/profile/:tutorId', getParentProfile)
// router.post('/upload-image',  uploadParentImage)
// router.delete('/delete-image',  deleteParentImage)

export default router 