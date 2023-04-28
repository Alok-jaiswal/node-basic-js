const express = require("express");
const router = express.Router();
const USER_SCHEMA = require("../usermodal");

router.get("/", async (req, res) => {
  try {
    res.send("Successfully fetched data");
  } catch (error) {
    if (error) {
      res.status(500).send({
        status: "failed",
        message: error.message,
      });
    }
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.body?.name) {
      const body = {
        name: req.body.name,
        last_name: req.body.last_name,
        mobile_number: req.body.mobile_number,
      };
      await USER_SCHEMA.create(body)
        .then((data) => {
          res.status(200).send({
            status: "success",
            data: data,
          });
        })
        .catch((err) => {
          console.log(err.message);
          res.status(400).send({
            status: 400,
            message: err.message,
          });
        });
    } else {
      console.log("Name not found");
      res.status(400).send({
        status: 400,
        message: "Not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
