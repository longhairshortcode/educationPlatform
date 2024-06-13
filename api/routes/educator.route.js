import express from "express"
const router = express.Router();

router.post('/create-profile', createEducatorProfile)
router.put('/edit-profile', editEducatorProfile)
router.get('/profile/:tutorId', getEducatorProfile)
// router.post('/upload-image',  uploadEducatorImage)
// router.delete('/delete-image',  deleteEducatorImage)

export default router