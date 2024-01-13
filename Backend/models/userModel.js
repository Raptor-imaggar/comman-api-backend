const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    
  },
  displayName: {
    type: String,
    required: true,
  },

  familyName: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
   
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
