const express = require("express");
const CheckinRouter = express.Router();
const { CreateChecinCtrl, CheckinGetCtrl } = require("../Controller/Checkin");


CheckinRouter.route("/create").post(CreateChecinCtrl);
CheckinRouter.route("/getcheck/:id").get(CheckinGetCtrl);

module.exports = CheckinRouter;
