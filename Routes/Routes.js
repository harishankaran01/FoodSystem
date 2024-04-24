const express=require("express");
const routes=express.Router();
const registerWaiter = require("../controller/registerController");
const loginWaiter=require("../controller/loginController");
const foodUpdate=require("../controller/foodController")
routes.route("/login").post(loginWaiter);
routes.route("/register").post(registerWaiter);
routes.route("/foodUpdate").post(foodUpdate.foodStatus);
routes.route("/addFood").post(foodUpdate.foodEntry);

module.exports=routes