const express = require("express");
const UserModel = require("../Model/waiterModel");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const registerWaiter = async (req, res, next) => {
    let password1;
    const { name, password, userID, contactNo, gmail } = req.body;
    if (!name || !password || !userID || !contactNo || !gmail) {
        res.statusCode = 404;
        return (next({ message: "All field are mandatory" }));
    }
    try {
        let User = await UserModel.find({WaiterID:userID });
        if (User.length > 0) {
            res.statusCode = 403;
            return (next({ message: "UserID Exists" }));
        }
    } catch (error) {
        res.statusCode = 500;
        return (next({ message: error.message }));
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        password1 = hashedPassword;
    } catch (error) {
        res.statusCode = 500;
        return (next({ message: "Error raised in bcrypt" }));
    }
    try {
        const User = await UserModel.create({
            Name:name, password: password1,WaiterID: userID,contactNumber: contactNo, gmail
        });
        res.json(
            {
                Message: "User Register SuccessFull",
                userID:userID
            }
        );
    } catch (error) {
        res.statusCode = 500;
        return (next({ message: error.message }));
    }
}

module.exports = registerWaiter;
