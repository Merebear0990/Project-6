const express = require('express'); //import express
const router = express.Router(); //can register routes here

const auth = require('../middleware/auth'); // authentication middleware
const multer = require('../middleware/multer-config'); // import multer configuration

const sauceCtrl = require('../controllers/sauce');

//routes
router.get('/', auth, sauceCtrl.getAllSauces); // finding the data from 'Sauce' - GET route
router.post('/', multer, sauceCtrl.createSauce); // sending to the server - POST route - CREATE
router.post('/:id/like', auth, multer, sauceCtrl.getRating); // sets like status - POST route - CREATE
router.get('/:id', auth, sauceCtrl.getOneSauce); // retrieving from the server - GET route - RECEIVE
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // modify existing data - PUT route - UPDATE
router.delete('/:id', auth, sauceCtrl.deleteSauce); // delete existing data - DELETE

module.exports = router;