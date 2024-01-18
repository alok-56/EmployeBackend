const UserModel = require("../Model/User");

const SignUpuserCtrl = async (req, res, next) => {
  try {
    //-------------------Validation Check-----------------------//

    let { Name, Email, Password } = req.body;

    //--------------------Check users--------------------------//
    let userFound = await UserModel.find({ Email: Email });
    if (userFound.length > 0) {
      return next(new AppErr("Email Already in Use", 404));
    }

    //-------------------Createing Users----------------------//
    let user = await UserModel.create(req.body);
    return res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    return next(new AppErr(error.message, 500));
  }
};

const SigninCtrl = async (req, res, next) => {
  try {
    let { Email, Password } = req.body;
    //-------------------Check Users--------------------------//
    let userFound = await UserModel.findOne({ Email: Email });
    if (userFound.length > 0) {
      return next(new AppErr("User not Found"), 404);
    }

    return res.status(200).json({
      message: "success",
      data: userFound,
    });
  } catch (error) {
    return next(new AppErr(error.message, 500));
  }
};

module.exports = { SigninCtrl, SignUpuserCtrl };
