import express from "express"
import {Find} from "../controllers/controllerCenter.js"
const router = express.Router();

router.get('/show-all-educators', Find.showAllEducators)
router.get('/search-all-educators', Find.searchAllEductors)
 router.get('/filter-by-subject', Find.filterEducatorBySubject)
 router.get('/filter-by-class', Find.filterEducatorByClass)
 router.get('/filter-by-grade', Find.filterEducatorByGrade)


export default router