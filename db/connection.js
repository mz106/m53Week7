const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("DB connection is working");
};

module.exports = connection;
