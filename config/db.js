const mongoose = require("mongoose");
const db_url = process.env.db_url;

const connect_db = () => {
  mongoose
    .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports = connect_db;
