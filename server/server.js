const express = require("express");
const cors = require("cors");

const sequelize = require("./models/index");
const logger = require("./config/logger/winston-config.js");
const morganMiddleware = require("./config/logger/morgan-config.js");
const userRoutes = require("./routes/userRoutes");


const app = express();
const port = process.env.SERVER_PORT || 5000;

// Set node env to UTC timezone
process.env.TZ = "UTC";

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morganMiddleware);

//Routes
app.use("/users", userRoutes);


// Start the server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  } catch (err) {
    logger.error("Unable to connect to the database:", err);
  }
};

startServer();


