// models/log.js

const mongoose = require('mongoose');

// Define the schema for log entries
const logSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  userAgent: String,
  host: String,
  protocol: String,
  origin: String,
  referer: String,
  language: String,
  // Add more fields as needed based on the information you want to capture
});

// Create a model based on the schema
const Log = mongoose.model('Log', logSchema);

module.exports = Log;
