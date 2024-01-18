const mongoose = require("mongoose");

const CheckinShema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    Lat: {
      type: String,
      required: true,
    },
    Lon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CheckinModel = mongoose.model("Check", CheckinShema);
module.exports = CheckinModel;
