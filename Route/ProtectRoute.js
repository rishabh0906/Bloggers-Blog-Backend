let { key } = require("../config");
let JWT = require("jsonwebtoken");

let ProtectRoute = (req, res, next) => {
  if (req.cookie.login) {
    let verified = JWT.verify(req.cookie.login, JWT);

    if (verified) {
      next();
    } else {
      res.send({ message: "Not Authorized" });
    }
  }
};

module.exports=ProtectRoute;
