import express from "express"
import { searchAllTutors, filterTutorsByClass, filterTutorsByGrade, filterTutorsBySubject, filterTutorsByRate } from "../controllers/auth.controller";
const router = express.Router();

router.get('/search-all-tutors', searchAllTutors)
 router.get('/filter-by-rate', filterTutorsByRate)
 router.get('/filter-by-subject', filterTutorsBySubject)
 router.get('/filter-by-class', filterTutorsByClass)
 router.get('/filter-by-grade', filterTutorsByGrade)


export default router