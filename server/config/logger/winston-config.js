const winston = require("winston");

// Define custom colors
winston.addColors({
  error: "red",
  warn: "yellow",
  info: "green",
  http: "blue",
  debug: "gray",
});

const logger = winston.createLogger({
  level: process.env.SERVER_LOG_LEVEL || "info",
  format: winston.format.combine(winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston.format.json()),
  transports: [new winston.transports.File({ filename: "server-errors.log", level: "error" }), new winston.transports.File({ filename: ".log" })],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.printf((info) => `[${info.timestamp}] ${info.message}`)
      ),
    })
  );
}

module.exports = logger;
