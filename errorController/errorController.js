const express = require("express");

const errorHandler = (err, req, res, next) => {
    let status = res.statusCode || 500; 
    res.status(status).json({
        message: err.message
    });
};

module.exports = errorHandler;
