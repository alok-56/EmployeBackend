const mongoose = require("mongoose");

const UserShema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel =  mongoose.model("UsersTrack",UserShema)
module.exports = UserModel;
