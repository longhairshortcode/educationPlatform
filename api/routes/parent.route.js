import express from "express"
const router = express.Router();

router.post('/create-profile', createParentProfile)
router.put('/edit-profile', editParentProfile)
router.get('/profile/:tutorId', getParentProfile)
// router.post('/upload-image',  uploadParentImage)
// router.delete('/delete-image',  deleteParentImage)

export default router 