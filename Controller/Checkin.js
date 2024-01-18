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
      res.status(404).json({
        status:"failed",
        message:"User not found",
       })
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
    res.status(404).json({
      status:"failed",
      message:error.message
     })
  }
};

const CheckinGetCtrl = async (req, res, next) => {
  try {
    //-------------------Check Users--------------------------//
    let userFound = await UserModel.findOne({ _id: req.params.id });
    if (!userFound) {
      res.status(404).json({
        status:"failed",
        message:"User not found",
       })
    }

    //-------------------Get Data------------------//
    let data = await CheckinModel.find({ UserId: req.params.id });

    return res.status(200).json({
      message: "success",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status:"failed",
      message:error.message
     })
  }
};

module.exports = { CreateChecinCtrl, CheckinGetCtrl };
