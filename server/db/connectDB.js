const mongoose = require('mongoose');

const connectDB = async (url) => {
  console.log("Database connected")
  return await mongoose.connect(url , { useNewUrlParser: true,});
};

module.exports = connectDB;
