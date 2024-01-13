const InternshipApplication = require('../models/internshipApplicationModel');

const InternController = {};

InternController.apply = async (req, res, next) => {
    try {
        const { firstName, lastName, companyName, email, phoneNumber, country, method } = req.body;

        if (method === 'google') {
            console.log('User authenticated via Google for internship application');
            res.send('User authenticated via Google for internship application');
        } else {
            // Check if the user already applied for the internship based on the email
            const existingApplication = await InternshipApplication.findOne({ email });

            if (existingApplication) {
                // User has already applied
                res.status(400).json({ error: 'User has already applied for the internship' });
            } else {
                // Create a new internship application
                const newApplication = new InternshipApplication({
                    firstName,
                    lastName,
                    companyName,
                    email,
                    phoneNumber,
                    country,
                    // Add more fields as needed
                });

                await newApplication.save();
                res.status(201).json({ message: 'Internship application submitted successfully' });
            }
        }
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = InternController;
