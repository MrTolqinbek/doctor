const logger = require("../utils/logger");

module.exports = (err, req, res, next) => {
  if (err.isOperational) {
    logger.error(`on path ${req.originalUrl} with method ${req.method}\n ${err.message}`);
    logger.error(err.stack);
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.status,
      statusCode:err.statusCode,

    });
  } else {
    logger.error(`on path ${req.originalUrl} with method ${req.method}\n ${err.message}`);
    logger.error(err.stack);
    return res.status(500).json({
      message: "something went wrong",
      status: "Unknown error",
      statusCode:500,
    });
  }
};