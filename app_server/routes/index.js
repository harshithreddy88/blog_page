const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlUsers = require('../controllers/user');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/2', ctrlLocations.locationInfo2);
router.get('/location/3', ctrlLocations.locationInfo3);



router.get('/location/review/new', ctrlLocations.addReview);
router.get('/location/review/new/2', ctrlLocations.addReview2);
router.get('/location/review/new/3', ctrlLocations.addReview3);
router.post('/location/review/new', ctrlLocations.addReview_post);
/* Other pages */
router.get('/about', ctrlOthers.about);
// Route for the login page
router.get('/login', ctrlUsers.login_get);
router.post('/login', ctrlUsers.login_post);

// Route for the registration 
router.get('/register', ctrlUsers.register_get);
router.post('/register', ctrlUsers.register_post);


module.exports = router;