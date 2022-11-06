const express = require("express");
const path = require("path");

const configs = require("./config/app-config");
const uploadsConfig = require("./config/uploads-config");

// Application
const app = express();

// Current config
const config = configs.development;

// Database setup
const { databaseSetup } = require("./database/setup");
databaseSetup({
  fresh: true,
  seed: true,
});

// Services
const { updateUserPhoto } = require("./services/usersService");

// Middlewares
const imageUploader = require("./middlewares/uploadRoute");

// Setting ejs as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static files server
app.use("/static", express.static(path.join(__dirname, "static")));

// Listening port
app.listen(config.port, () => {
  console.log(`Server is running in port ${config.port} ...`);
});
