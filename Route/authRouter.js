const express = require("express");
const authRouter = express.Router();
authRouter.route("/signup").post(SignInUser);
let bcrypt = require("bcrypt");
let AdminModel = require("../Models/AdminModel");

let CreateUser = async(req,res)=>{
         
    let  { email, password } = req.body;

    try{   
        let user=await AdminModel.findOne({email});
        
    }
    catch(err){

    }
}

let SignInUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await AdminModel.findOne({ email });
    if (user) {
      let authorized = bcrypt.compareSync(password, user.password);
      if (authorized) {
        res.status(200).send({ status: "success" });
      } else {
        res.status(401).send({ status: "fail" });
      }
    }
    else{
        res.status(401).send({ status: "fail" });
    }
  } catch (err) {
    res.status(500).send({ status: "server error" });
  }
};

module.exports = authRouter;
