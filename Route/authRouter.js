const express = require("express");
const authRouter = express.Router();
let bcrypt = require("bcrypt");
let AdminModel = require("../Models/AdminModel");
let { key } = require("../config");
let JWT = require("jsonwebtoken");

let CreateUser = async (req, res) => {
  let { email, password } = req.body;
  let hash = await bcrypt.hash(password, 10);
  try {
    let user = await AdminModel.findOne({ email });
    if (user) {
      res.send({ status: "Already Exist" });
    } else {
      let user = await AdminModel.create({ email, password: hash });
      res.send({ status: "Created" });
    }
  } catch (err) {
    res.send({ status: "server error" });
  }
};

let SignInUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await AdminModel.findOne({ email });
    if (user) {
      
      let authorized = bcrypt.compareSync(password, user.password);
      if (authorized) {
        let token = JWT.sign({id:user["_id"]}, key);
        res.cookie("login", token, {
          httpOnly: true,
          maxAge:9000,

        });
        res.status(200).send({ status: "success" });
      } else {
        res.status(401).send({ status: "fail" });
      }
    } else {
      res.status(401).send({ status: "fail" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "server error" });
  }
};

authRouter.route("/signup").post(SignInUser);
authRouter.route("/create").post(CreateUser);

module.exports = authRouter;
