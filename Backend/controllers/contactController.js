const ContactApplication = require('../models/contactApplicationModel');

const ContactController = {};

ContactController.apply = async (req, res, next) => {
  try {
    const { firstName, lastName, companyName, email, phoneNumber, message, method } = req.body;

    if (method === 'google') {
      console.log('User authenticated via Google for contact application');
      res.send('User authenticated via Google for contact application');
    } else {
      // Check if the user already submitted a contact application based on the email
      const existingApplication = await ContactApplication.findOne({ email });

      if (existingApplication) {
        // User has already submitted a contact application
        res.status(400).json({ error: 'User has already submitted a contact application' });
      } else {
        // Create a new contact application
        const newApplication = new ContactApplication({
          firstName,
          lastName,
          companyName,
          email,
          phoneNumber,
          message,
          // Add more fields as needed
        });

        await newApplication.save();
        res.status(201).json({ message: 'Contact application submitted successfully' });
      }
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = ContactController;
