const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    phone: {
      type: String,
      require,
    },
    foodType: {
      type: String,
      require,
      default: 0,
    },
    quantity: {
      type: mongoose.Schema.Types.Mixed, // Allows both Number and String
      require,
    },
    type:{
        type: String,
        require,

    },
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("Events", EventsSchema);

module.exports = Events;
