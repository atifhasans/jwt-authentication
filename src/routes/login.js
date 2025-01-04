const express = require("express");
const cors = require("cors");
const { login, refreshToken } = require("../controllers/login");

const router = express.Router();

// Apply CORS middleware to the router
router.use(cors());

router.post("/login", login);
router.post("/refresh-token", refreshToken);

module.exports = router;
