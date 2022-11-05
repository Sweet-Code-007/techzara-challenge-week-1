const express = require("express");
const configs = require("./config/app-config");

// Application
const app = express();

// Current config
const config = configs.development;

// Listening port
app.listen(config.port, () => {
  console.log(`Server is running in port ${config.port}`);
});
