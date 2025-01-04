const express = require("express");
const cors = require("cors");
const userController = require("../controllers/user");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

// Apply CORS middleware to the router
router.use(cors());

router.get("/users", authMiddleware.authenticateToken, userController.getUsers);

module.exports = router;

