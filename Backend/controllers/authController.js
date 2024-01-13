const User = require('../models/userModel');

const AuthController = {};

AuthController.login = async (req, res, next) => {
    const { email, password, method } = req.body;
    if (method === 'google') {
        console.log('User authenticated via Google'); // Log specific message for Google authentication
        res.send('User authenticated via Google')
    }
   else {
    try {
        // Check if the user exists in the database based on the email
        const user = await User.findOne({ email });

        if (user) {
            // User exists
            // Here you'd typically use a library like bcrypt to compare the hashed password
            // For simplicity, we'll compare the plain text password (not recommended in production)
            if (user.password === password) {
                // Password matches

                
                res.status(200).json({ message: 'User authenticated successfully' });
            } else {
                // Password doesn't match
                res.status(401).json({ error: 'Invalid password' });
            }
        } else {
            // User does not exist
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }}
};

module.exports = AuthController;
