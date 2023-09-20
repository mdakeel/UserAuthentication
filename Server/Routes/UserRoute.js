const express = require("express");
const UserModel = require("../Models/userModel");
const { registerUser, loginUser, getUserDetails } = require("../Controllers/userController");

const UserRoute = express.Router();

// to register
UserRoute.post("/register", registerUser);

// to login
UserRoute.post("/login", loginUser);

// get user details/ convert toke key into json data
UserRoute.post("/details", getUserDetails);

module.exports = UserRoute


