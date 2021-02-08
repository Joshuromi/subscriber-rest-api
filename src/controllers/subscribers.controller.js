const SubscriberModel = require("../models/subscriber.model");

const controller = {};

// Get all Subscribers
controller.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await SubscriberModel.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one Suscriber
controller.getOneSubscriber = async (req, res) => {
  res.status(200).json(res.subscriber);
};

// Register a suscriber
controller.registerASubscriber = async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a subscriber
controller.updateASubscriber = async (req, res) => {
  if (req.body.name != null && req.body.subscribedToChannel != null) {
    res.subscriber.name = req.body.name;
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  }

  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Delete a subscriber
controller.deleteASubscriber = async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = controller;
