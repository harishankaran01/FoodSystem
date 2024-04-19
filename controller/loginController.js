const loginModel = require("../Model/waiterModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const LoginWaiter = async (req, res, next) => {
    const { userID, password } = req.body;
    if (!userID || !password) {
        res.statusCode = 404;
        return (next({ message: "Enter UserID and Password" }));
    }
    let User;
    try {
        User = await loginModel.findOne({ WaiterID: userID });
        if (!User) {
            return (next({ message: "No User Found" }));
        }
    } catch (error) {
        res.statusCode = 500;
        return (next({ message: "Error raised in MongoDB" }));
    }

    try {
        const validPassword = await bcrypt.compare(password, User.password);
        if (!validPassword) {
            res.statusCode = 403;
            return (next({ message: "Password didn't Match" }));
        }
    } catch (error) {
        res.statusCode = 500;
        return (next({ message: "Error raised in Bcrypt" }));
    }

    res.json({
        message: "Login Successful",
        userID: userID
    });
};

module.exports = LoginWaiter;
