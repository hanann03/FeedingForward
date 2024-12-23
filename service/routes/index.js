var express = require("express");
var router = express.Router();
var Order = require("../model/order");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/order", async function (req, res) {
  try {
    const newOrder = new Order({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      numberOfMeals: req.body.numberOfMeals,
      location: req.body.location,
    });
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    console.error("Error creating order:", err.message);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;

