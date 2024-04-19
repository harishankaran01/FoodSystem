const express=require("express");
const routes=express.Router();
const registerWaiter = require("../controller/registerController");
const loginWaiter=require("../controller/loginController");
routes.route("/login").post(loginWaiter);
routes.route("/register").post(registerWaiter)


module.exports=routes