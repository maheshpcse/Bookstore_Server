const express = require('express');
var router = express.Router();
var authController = require('../../controllers/mongodbcontroller/auth_controller.js');


router.post('/signup', authController.signup);


module.exports = router;