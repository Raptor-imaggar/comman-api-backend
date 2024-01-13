const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
const sendSMTPEmail = require('../utils/CarrersSendSMTPEmail');
require('dotenv').config();





passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  userProfileURL: process.env.userProfileURL,
  scope: process.env.scope,
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const { id, name, displayName, photos, emails } = profile;
   
    // Check if the user exists in the database
    let user = await User.findOne({ googleId: id });

    if (!user) {
      // If the user doesn't exist, create a new user in the database
      user = await new User({
        googleId: id,
        displayName: displayName,
        familyName: name.familyName,
        profilePic: photos[0].value,
        email: emails[0].value,
        // ... other necessary user data
      }).save();
      console.log("registered ")
    }  
       

    return done(null, user); // Return the user
  } catch (error) {
    return done(error, null);
  }
}));

const authController = {};

authController.googleAuth = passport.authenticate('google', { scope: ['profile', 'email', 'openid'] });

authController.googleCallback = (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) {
      console.error('Error during Google authentication:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    try {
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      // Successful authentication response
      // await sendSMTPEmail(user.email, "Registration Successful", "Thank you for registering!", "career_EMAIL");

      // Send the response to the user
      res.status(200).json({
        message: 'Welcome!',
        users: user
      });

    } catch (error) {
      console.error('Error during login/registration:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })(req, res, next);
};


module.exports = authController;
