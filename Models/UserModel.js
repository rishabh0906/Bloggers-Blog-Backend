const mongoose = require("mongoose");
const { db_link } = require("../config");

mongoose
  .connect(db_link)
  .then(() => {
    console.log("db connected");
  })
  .catch(() => {
    console.log("error");
  });

  let UserSchema=new mongoose.Schema({
      name:{
          type:String,
        required:true
      },
      email:{
          type:String,
          required:true,
          unique:true
      },
      password:{
          type:String,
          required:true,
          
      }
  })