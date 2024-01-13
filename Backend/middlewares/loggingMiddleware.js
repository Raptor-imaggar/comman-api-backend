// loggingMiddleware.js

const Log = require('../models/log'); // Adjust the path as needed

function loggingMiddleware(req, res, next) {
  const logEntry = new Log({
    method: req.method,
    path: req.path,
    timestamp: new Date(),
    ipAddress: req.ip, // Extracts IP address from the request
    userAgent: req.headers['user-agent'], // Extracts browser information from the request headers
    host: req.headers['host'], // Extracts the host
    protocol: req.protocol, // Extracts the protocol (http/https)
    origin: req.headers['origin'], // Extracts the origin
    referer: req.headers['referer'], // Extracts the referer
    language: req.headers['accept-language'], // Extracts the language preference
    // Add more fields as needed based on the information available in the request
  });

  // Save the log entry to the database
  logEntry.save()
    .then(() => {
      console.log('Request logged to database');
    })
    .catch((error) => {
      console.error('Error logging to database:', error);
    });

  next();
}

module.exports = loggingMiddleware;
