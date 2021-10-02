const express=require("express");
const authRouter=express.Router();
authRouter.route("/signup").post(SignUpUser);

authRouter.route("/login").post(LoginUser);


let SignUpUser= async (req,res)=>{

  

}


module.exports=authRouter;