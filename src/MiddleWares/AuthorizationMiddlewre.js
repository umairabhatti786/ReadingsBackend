const { jwt, jwtKey } = require("../Db/Config");

const verifyToken = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token",token)
  if (!token || !authHeader.startsWith("Bearer ")) {
    res.status(400).send({
      status: false,
      message: "token missing",
    });

    return;
  }
  jwt.verify(token, jwtKey, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ success: false, message: "Token is expired",status:401 });
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Invalid token" });
      }
    }

    // console.log("req.user",req)
    req.user = decoded; // Attach decoded token data to request
    req.user = decoded; // attach decoded data to req.user
    console.log("req.user:", req.user); // confirm it is set
    next();
  });


};
module.exports = verifyToken;
