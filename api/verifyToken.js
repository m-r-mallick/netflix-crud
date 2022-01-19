const jwt = require("jsonwebtoken");

function verify(req, res, next) {
   const authHeader = req.headers.token;
   if (authHeader) {
      const token = String(authHeader).substring(7);
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
         if (err) {
            return res.status(401).json({ error: "Invalid JsonWebToken!" });
         }
         req.user = user;
         next();
      });
   } else {
      return res.status(401).json({ error: "Permission denied!" });
   }
}

module.exports = verify;
