let mongoose = require("mongoose");
let { db_link } = require("../config");

mongoose
  .connect(db_link)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("error");
  });

let BlogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  blog: {
    type: String,
  },
  category: {
    type: String,
  },
});

let BlogModel = mongoose.model("BlogModel", BlogSchema);
module.exports = BlogModel;
