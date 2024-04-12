const mongoose = require("mongoose");

const uri =
  "mongodb+srv://raorao78666:6ikYWVd84Yab848t@cluster0.lxft4bd.mongodb.net";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
