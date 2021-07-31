const express = require('express');
const router = express.Router()
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

// Public 

router.post('/signup', usersCtrl.signup)
router.post('/login', usersCtrl.login);



// Private 

module.exports = router ;