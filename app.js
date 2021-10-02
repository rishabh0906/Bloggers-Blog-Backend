const express = require("express");

const app = express();
const port = 4000;
app.listen(port, () => {
  console.log(`server started at ${port}`);
});

app.use(express.json());

let authRouter = require("./Route/authRouter");

app.use("/auth", authRouter);
