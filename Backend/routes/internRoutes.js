const express = require('express');
const router = express.Router();
const InternController = require('../controllers/internController');

// Route for internship application
router.post('/apply', InternController.apply);

module.exports = router;
