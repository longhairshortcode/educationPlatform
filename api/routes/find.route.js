import express from "express"
import {find} from "../controllers/controllerCenter.js"
const router = express.Router();

router.get('/search-all-tutors', find.searchAllTutors)
 router.get('/filter-by-rate', find.filterTutorsByRate)
 router.get('/filter-by-subject', find.filterTutorsBySubject)
 router.get('/filter-by-class', find.lterTutorsByClass)
 router.get('/filter-by-grade', find.lterTutorsByGrade)


export default router