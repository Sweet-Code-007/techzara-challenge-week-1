const express = require("express");
const path = require("path");

const configs = require("./config/app-config");

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

// Static files server
app.use("/static", express.static(path.join(__dirname, "static")));

// Listening port
app.listen(config.port, () => {
  console.log(`Server is running in port ${config.port} ...`);
});
