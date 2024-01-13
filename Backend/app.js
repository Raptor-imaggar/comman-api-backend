const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const loggingMiddleware = require('./middlewares/loggingMiddleware'); // If you have a logging middleware
const authRoutes = require('./routes/authRoutes'); // Import the authRoutes file
const internshipRoutes = require('./routes/internRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;
const contactRoutes = require('./routes/contactRoutes');
const subscribeRoutes = require('./routes/subscribeRoutes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Use the logging middleware for all requests
app.use(loggingMiddleware);

// Use authentication routes
app.use('/auth', authRoutes); // Use the authRoutes for routes starting with '/auth'

app.use('/internship', internshipRoutes);
app.use('/api', subscribeRoutes);

// Use contact routes
app.use('/api', contactRoutes); // You can customize the base path, e.g., '/api/contact'





// Handle 404 errors - Route not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware - Centralized error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


