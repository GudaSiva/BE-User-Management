const express = require("express");
const localDB = require("./src/configs/db-local.config");
const db = require("./src/utils/db-connect");
require("dotenv").config();
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

// body parser in json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REST API in route path
app.use("/api", require("./src/routes")(router));
//testing route
app.use("/", (req, res) => {
  res.send("App is running");
});

//  server
app.listen(localDB.port, () => {
  console.log(`Server is running on port ${localDB.port}`);
});

module.exports = app;
