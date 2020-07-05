const express = require('express');
var router = express.Router();
var auth_controllser = require('../mongodbcontroller/auth_controller');


router.post('/signup', auth_controllser.booksregister);


module.exports = router;
