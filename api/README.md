1. USER
EDUCATOR CONTROLLERS: “/controllers/user.js” ?  or “/controllers/educators.js” ?
createEducatorProfile
editEducatorProfile
getEducatorProfile
uploadEducatorImage
deleteEducatorImage
	ROUTES: “ routes/user.route.js ?   or  routes/educator.route.js”
router.post(‘/create-profile’, createEducatorProfile)
router.put(‘/edit-profile’, editEducatorProfile)
router.get(‘/profile/:tutorId’, getEducatorProfile)
router.post(‘/upload-image’,  uploadEducatorImage)
router.delete(‘/delete-image’,  deleteEducatorImage)


PARENT CONTROLLERS: “/controllers/user.js” ?  or “/controllers/parents.js” ? 

createParentProfile
editParentProfile
getParentProfile
uploadParentImage
deleteParentImage
	ROUTES: “routes/user.route.js ? or routes/parent.route.js ?”
router.post(‘/create-profile’, createParentProfile)
router.put(‘/edit-profile’, editParentProfile)
router.get(‘/profile/:parentId’, getParentProfile)
router.post(‘/upload-image’,  uploadParentImage)
router.delete(‘/delete-image’,  deleteParentImage)

2. REVIEWS 
CONTROLLERS: “/controllers/review.js”  
leaveReview
editReview
deleteReview 
getReviews

ROUTES: “routes/reviews.route.js”
router.post(‘/leave-review’, leaveReview)
router.put(‘/edit-review’, editReview)
router.delete(‘/delete-review’, deleteReview)
router.get(‘/reviews/:tutorId’, getReviews)

3. MESSAGES 
CONTROLLERS: “/controllers/messages.js” 
sendMessage
getMessaged
createChatLog ???
getChatLog ????
ROUTES: “routes/messages.route.js”
 router.post(‘/send-message’, sendMessage)
 router.get(‘/get-messages’, getMessages)
 ?
 ?

4. FIND
CONTROLLERS: “/controllers/find.js” 
searchTutors
filterTutorByRate
filterTutorBySubject
filterTutorByClass
filterTutorByGrade
ROUTES: “routes/parent.find.js” 
 router.get(‘/search-all-tutors’, searchAllTutors)
 router.get(‘/filter-by-rate’, filterTutorsByRate)
 router.get(‘/filter-by-subject’, filterTutorsBySubject)
 router.get(‘/filter-by-class’, filterTutorsByClass)
 router.get(‘/filter-by-grade’, filterTutorsByGrade)


5. CONFERENCE 
CONTROLLERS: “/controllers/conference.js” 
startConference
endConference
getConferecenDetails ???
ROUTES: “routes/conference.route.js”
 router.post(‘/start-conference’, startConference)
 router.post(‘/end-conference’, endConference)
?
