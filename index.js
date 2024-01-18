const express = require("express");
const cors = require("cors");
const Db = require("./Global/Config");
const UserRouter = require("./Routes/User");
const CheckinRouter = require("./Routes/Chcekin");
const app = express();
Db();

//-----------------MiddleWare-------------------------//
app.use(express.json());
app.use(cors());

//------------------Routes MiddleWare---------------------//
app.use("/api/v1/Users", UserRouter);
app.use("/api/v1/Check", CheckinRouter);


//----------------Server Listening--------------------------//
const PORT = 3000;
const Applisten = () => {
  //------------Database Call------------//
  app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });
};
Applisten();
