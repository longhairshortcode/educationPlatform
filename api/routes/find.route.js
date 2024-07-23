import express from "express"
import {Find} from "../controllers/controllerCenter.js"
const router = express.Router();

router.get('/show-all-tutors', Find.showAllTutors)
router.get('/search-all-tutors', Find.searchAllTutors)
 router.get('/filter-by-rate', Find.filterTutorsByRate)
 router.get('/filter-by-subject', Find.filterTutorsBySubject)
 router.get('/filter-by-class', Find.lterTutorsByClass)
 router.get('/filter-by-grade', Find.lterTutorsByGrade)


export default router