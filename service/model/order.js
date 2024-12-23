const mongoose = require("mongoose");

const OrderFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please enter your phone number"],
    },
    numberOfMeals: {
      type: Number,
      required: [true, "Please enter the number of meals you want"],
      default: 0,
    },
    location: {
      type: mongoose.Schema.Types.Mixed, // Allows both Number and String
      required: [true, "Please enter your location"],
    },
  },
  {
    timestamps: true,
  }
);

const OrderForm = mongoose.model("OrderForm", OrderFormSchema);

module.exports = OrderForm;
