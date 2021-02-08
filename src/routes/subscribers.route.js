const express = require("express");
const router = express.Router();
const controller = require("../controllers/subscribers.controller");
const middleware = require("../middleware/subscriber.middleware");

// Getting all subscribers
router.get("/", controller.getAllSubscribers);

// Getting One subscriber
router.get("/:id", middleware.getSubscriber, controller.getOneSubscriber);

// Creating new subscriber
router.post("/", controller.registerASubscriber);

// Updating One subscriber
router.patch("/:id", middleware.getSubscriber, controller.updateASubscriber);

// Deleting One subscriber
router.delete("/:id", middleware.getSubscriber);

module.exports = router;
