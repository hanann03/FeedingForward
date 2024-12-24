const mongoose = require("mongoose");

const OrderFormSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    contactNumber: {
      type: String,
      require,
    },
    mealQuantity: {
      type: String,
      require,
      default: 0,
    },
    address: {
      type: mongoose.Schema.Types.Mixed, // Allows both Number and String
      require,
    },
  },
  {
    timestamps: true,
  }
);

const OrderForm = mongoose.model("OrderForm", OrderFormSchema);

module.exports = OrderForm;
