const express = require('express');
const { registerUser,loginUser } = require('../controllers/userCoontroller');
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

module.exports = router;