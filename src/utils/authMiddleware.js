const jwt = require("jsonwebtoken");
const secretKey = require("../configuration/jwtConfig");

function authenticateToken(req, res, next) {
    const authHeader = req.header("Authorization");

    // Check if the Authorization header exists
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: Missing token!" });
    }

    // Split the Authorization header and validate the format
    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized: Invalid token format" });
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, user) => {
        // Attach the decoded user information to the request object
        req.user = user;
        next();
    });
}

function verifyToken(token) {
    jwt.verify(token,secretKey);
   }

module.exports = {authenticateToken, verifyToken};
