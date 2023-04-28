require('dotenv').config()
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const constant = require("./constant");
const connect_db = require("./config/db");
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
constant.map((constant) => app.use(constant.path, constant.route));
connect_db()
app.listen("5000", () => {
  console.log("server is online at 5000");
});
