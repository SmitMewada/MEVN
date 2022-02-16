const ErrorHandler = require("../utils-error-handler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // MongoDB castID error
  if (err.name == "CastError") {
    const message = `Resource not found or Invalid ID. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code == 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
