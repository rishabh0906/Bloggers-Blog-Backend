const express = require("express");

const app = express();
const port = 4000;
app.listen(port, () => {
  console.log(`server started at ${port}`);
});

app.use(express.json());

let authRouter = require("./Route/authRouter");
let userRouter = require("./Route/UserRouter");
let blogRouter = require("./Route/blogRouter");

app.use("/blog", blogRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
