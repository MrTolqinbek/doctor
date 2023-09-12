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
if(err.message.includes("Unexpected end of form")){
  return res.status(400).json({
    message: "Please fill a form",
    status: "fail",
    statusCode:500,
  });
}
    console.log(err.message);
    logger.error(`on path ${req.originalUrl} with method ${req.method}\n ${err.message}`);
    logger.error(err.stack);
    return res.status(500).json({
      message: "something went wrong",
      status: "Unknown error",
      statusCode:500,
    });
  }
};