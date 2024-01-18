const mongoose = require("mongoose");
const Db = () => {
  mongoose
    .connect(
      "mongodb+srv://alok:HmjA87MZgewsCr5M@cluster0.qbpplab.mongodb.net/"
    )
    .then((res) => {
      console.log("Mongodb Connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Db;
