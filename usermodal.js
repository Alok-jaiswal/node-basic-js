const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    mobile_number: {
      type: Number,
    },
    is_delete: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
  },
  { timestamps: true }
);
const USER_SCHEMA = new mongoose.model("user_schema", userschema);
module.exports = USER_SCHEMA;
