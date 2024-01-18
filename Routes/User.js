const express = require("express");
const { SignUpuserCtrl, SigninCtrl } = require("../Controller/User");
const UserRouter = express.Router();

UserRouter.route("/Signup").post(SignUpuserCtrl);

UserRouter.route("/Signin").post(SigninCtrl);

module.exports = UserRouter;
