const Subscribe = require('../models/subscribeModel');

const SubscribeController = {};

SubscribeController.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is already subscribed
    const existingSubscriber = await Subscribe.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email is already subscribed' });
    }

    // Create a new subscription
    const newSubscriber = new Subscribe({
      email,
    });

    // Save the subscription to the database
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = SubscribeController;
