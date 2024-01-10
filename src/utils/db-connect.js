const mongoose = require("mongoose");
const localDB = require("../configs/db-local.config");

mongoose.connect(localDB.mongodbUrl);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Mongodb Connection Error", error);
});

db.once("open", () => {
  console.log("Connected MongoDB");
});

module.exports = db;
