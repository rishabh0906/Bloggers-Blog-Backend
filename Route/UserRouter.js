const express = require("express");
const userModel = require("../Models/UserModel");
const userRouter = express.Router();


let RegisterUser = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
      res.send({status:"already exist"});
} else {
    user = await userModel.create({ email: req.body.email });
    res.send({ status: "success" });
  }
};

userRouter.post("/RegisterUser", RegisterUser);
module.exports = userRouter;
