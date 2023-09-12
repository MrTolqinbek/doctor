const winston = require("winston");
const ccl = require("cli-color");
const loggerConfig = {
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: "logs/error.log" ,level:"error"}),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.level==="info"?ccl.blue(info.message):info.level==="warn"?ccl.magenta(info.message):ccl.red(info.message)} ${ccl.cyan.bold(info.level)} ${ccl.yellow(info.timestamp)}`),
  ),
};

module.exports =  winston.createLogger(loggerConfig);;