// models/contactApplication.js
const mongoose = require('mongoose');

const contactApplicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You might want to add validation for a valid email format
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // You can add more fields specific to your contact application
  // For example, fields related to the inquiry, preferred contact method, etc.
});

const ContactApplication = mongoose.model('ContactApplication', contactApplicationSchema);

module.exports = ContactApplication;
