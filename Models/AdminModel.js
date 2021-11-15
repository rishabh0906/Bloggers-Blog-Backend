let { db_link } = require("../config");
let mongoose = require("mongoose");

mongoose
  .connect(db_link)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("error");
  });

let AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

let AdminModel = mongoose.model("AdminModel", AdminSchema);

module.exports = AdminModel;
