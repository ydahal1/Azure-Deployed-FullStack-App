const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db/db-config");
const logger = require("../config/logger/winston-config");

const env = process.env.NODE_ENV || "development";
const { username, password, database, host, dialect, logging } = dbConfig[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: logging ? console.log : false,
});

sequelize
  .authenticate()
  .then(() => logger.info("Database connected..."))
  .catch((err) => logger.error("Error: " + err));

module.exports = sequelize;
