const SendEmail = require("../Global/SendEmail");
const CheckinModel = require("../Model/Checkin");
const UserModel = require("../Model/User");

const CreateChecinCtrl = async (req, res, next) => {
  try {
    //-------------------Validation Check-----------------------//

    let { Lat, Lon, UserId } = req.body;
    console.log(UserId);

    //--------------------Check users--------------------------//
    let userFound = await UserModel.findOne({ _id: UserId });
    console.log(userFound);
    if (!userFound) {
      return res.status(404).json("User Not Found ");
    }

    //--------------Send Email-----------------//
    let res1 = await SendEmail(userFound.Email, Lat, Lon);

    //-------------------Createing Users----------------------//
    let Checkin = await CheckinModel.create(req.body);
    return res.status(200).json({
      message: "success",
      data: Checkin,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const CheckinGetCtrl = async (req, res, next) => {
  try {
    //-------------------Check Users--------------------------//
    let userFound = await UserModel.findOne({ _id: req.params.id });
    if (!userFound) {
      return res.status(404).json("User Not Found ");
    }

    //-------------------Get Data------------------//
    let data = await CheckinModel.find({ UserId: req.params.id });

    return res.status(200).json({
      message: "success",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { CreateChecinCtrl, CheckinGetCtrl };
