const winston = require("winston");

const logger = new winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.json(),
    winston.format.timestamp()
  ),
  transports: [
    new winston.transports.File({ filename: "error.logs", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.Console({ timestamp: true, colorize: true }),
  ],
});


module.exports = {logger}