import express from "express"
import {leaveReview, editReview, deleteReview, getReviews}
const router = express.Router();

router.post('/leave-review', leaveReview)
router.put('/edit-review', editReview)
router.delete('/delete-review', deleteReview)
//QQQ  below good here?
router.get('/reviews/:tutorId', getReviews)

export default router