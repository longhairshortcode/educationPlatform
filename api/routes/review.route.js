import express from "express"
import {review} from "../controllers/controllerCenter.js"
const router = express.Router();

router.post('/leave-review', review.leaveReview)
router.put('/edit-review', review.editReview)
router.delete('/delete-review', review.deleteReview)
router.get('/:tutorId', review.getReviews)

export default router