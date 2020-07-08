const express = require('express');
var router = express.Router();
var authController = require('../../controllers/mongodbcontroller/auth_controller.js');
var addbooks = require('../../controllers/mongodbcontroller/add_books');


router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/addbooks', addbooks.booksadded);
router.get('/getbooks', addbooks.getbboks);
router.post('/updatebook', addbooks.updatebook);


module.exports = router;