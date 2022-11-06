const express = require("express");
const path = require("path");

// Configurations
const configs = require("./config/app-config");
const uploadsConfig = require("./config/uploads-config");

// Application
const app = express();

// Current config
const config = configs.development;

// Database setup
const { databaseSetup } = require("./database/setup");
databaseSetup({
  fresh: true, // Drops all before migration
  seed: true, // Runs the seeder
});

// Services
const { updateUserPhoto, getUsers, getUser, createUser, updateUser } = require("./services/usersService");

// Middlewares
const imageUploader = require("./middlewares/uploadRoute");

// Setting ejs as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static files server
app.use("/static", express.static(path.join(__dirname, "static")));

/*
 ** USERS ROUTE ******************************************************
 */

// Gets all users
app.get("/api/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

// Gets a user
app.get("/api/users/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  res.json(user);
});

// Adds a user
app.post("/api/users", async (req, res) => {
  const user = await createUser(req.body);
  res.json(user);
});

// Updates a user
app.put("/api/users/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  return res.json(user);
});

// Updates a user's photo
const field = "photo";
const storagePath = path.join(__dirname, uploadsConfig.USERS_PATH);
app.put(
  "/api/users/:id/photo",
  imageUploader(field, storagePath, async (req, res) => {
    const user = await updateUserPhoto(req.body);
    return res.json(user);
  })
);

/* *************************************************************** */

// Listening port
app.listen(config.port, () => {
  console.log(`Server is running in port ${config.port} ...`);
});
