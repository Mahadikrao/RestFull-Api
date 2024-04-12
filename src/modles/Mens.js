const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  userRole: {
    type: String,
    require: true,
    unique: true,
  },
  userPassword: {
    type: String,
    require: true,
  },
});
const MensUser = new mongoose.model("menUser", menSchema);
module.exports = MensUser;
