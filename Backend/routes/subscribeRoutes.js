// routes/subscribeRoutes.js
const express = require('express');
const router = express.Router();
const SubscribeController = require('../controllers/subscribeController');

// POST /api/subscribe
router.post('/subscribe', SubscribeController.subscribe);

module.exports = router;
