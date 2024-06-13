import express from "express"
const router = express.Router();

router.post('/leave-review', leaveReview)
router.put('/edit-review', editReview)
router.delete('/delete-review', deleteReview)
router.get('/reviews/:tutorId', getReviews)

export default router