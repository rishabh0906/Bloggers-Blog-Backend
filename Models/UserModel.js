const mongoose = require("mongoose");
const { db_link } = require("../config");

mongoose
  .connect(db_link)
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error:",e);
  });

let UserSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

let userModel = mongoose.model("userModel", UserSchema);

module.exports = userModel;
