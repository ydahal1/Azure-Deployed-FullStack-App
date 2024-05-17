const morgan = require("morgan");
const logger = require("./winston-config");

morgan.token("message", function (req, res) {
  return res.statusMessage;
});

morgan.token("pid", function () {
  return process.pid;
});

morgan.format("myformat", '[:date[clf]] ":method :url" :status :message - :response-time ms - Process :pid');

const morganMiddleware = morgan("myformat", { stream: { write: (message) => logger.http(message.trim()) } });

module.exports = morganMiddleware;
