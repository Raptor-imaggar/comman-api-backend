const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

// Define routes for contact application
router.post('/contact/apply', ContactController.apply);

module.exports = router;
