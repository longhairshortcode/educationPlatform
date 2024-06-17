import express from "express"
import {Review} from "../controllers/controllerCenter.js"
const router = express.Router();

router.post('/leave-review',Review.addReview)
router.put('/edit-review', Review.editReview)
router.get('/:tutorId', Review.getReviews)

export default router