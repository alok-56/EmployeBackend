const UserModel = require("../Model/User");

const SignUpuserCtrl = async (req, res, next) => {
  try {
    //-------------------Validation Check-----------------------//

    let { Name, Email, Password } = req.body;

    //--------------------Check users--------------------------//
    let userFound = await UserModel.find({ Email: Email });
    if (userFound.length > 0) {
     res.status(404).json({
      status:"failed",
      message:"Email Already in use"
     })
    }

    //-------------------Createing Users----------------------//
    let user = await UserModel.create(req.body);
    return res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status:"failed",
      message:error.message
     })
  }
};

const SigninCtrl = async (req, res, next) => {
  try {
    let { Email, Password } = req.body;
    //-------------------Check Users--------------------------//
    let userFound = await UserModel.findOne({ Email: Email });
    if (userFound.length > 0) {
      res.status(404).json({
        status:"failed",
        message:"User Not Found"
       })
    }

    return res.status(200).json({
      message: "success",
      data: userFound,
    });
  } catch (error) {
    res.status(500).json({
      status:"failed",
      message:error.message
     })
  }
};

module.exports = { SigninCtrl, SignUpuserCtrl };
