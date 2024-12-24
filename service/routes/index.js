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
      fullName: req.body.fullName,
      Email: req.body.Email,
      contactNumber: req.body.contactNumber,
      mealQuantity: req.body.mealQuantity,
      Address: req.body.address,
    });
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    console.error("Error creating order:", err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post("/events", async function (req, res){
  try{

    const newEvent = new Event({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      doner:req.body.doner,
      foodType:req.body.foodType,
      quantity:req.body.quantity,

    })
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);

  }catch(err){
    console.error("error creating event" , err.message);
    res.status(500).json({ message:err.message})
     
  }
})


module.exports = router;

