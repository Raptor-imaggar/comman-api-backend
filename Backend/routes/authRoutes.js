const express = require('express');
const router = express.Router();
const googleAuthController = require('../controllers/googleAuthController');
const  AuthController = require('../controllers/authController')


router.get('/google/login', googleAuthController.googleAuth);
router.get('/google/callback', googleAuthController.googleCallback);
router.get('/login', AuthController.login);


module.exports = router;


