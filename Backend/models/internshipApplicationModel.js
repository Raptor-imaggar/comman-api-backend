// models/internshipApplication.js
const mongoose = require('mongoose');

const internshipApplicationSchema = new mongoose.Schema({
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
  country: {
    type: String,
    // You can add more specific validation for the country if needed
  },
  // You can add more fields specific to your internship application
  // For example, fields related to the internship position, resume, etc.
});

const InternshipApplication = mongoose.model('InternshipApplication', internshipApplicationSchema);

module.exports = InternshipApplication;
