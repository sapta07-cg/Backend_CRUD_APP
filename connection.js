const mongoose = require("mongoose");

const connectMongoDb = async (url) => {
  return await mongoose.connect(url);
};

module.exports = {
  connectMongoDb,
};

// mongoose
//   .connect("mongodb://localhost:27017/cgemployee")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Mongo err", err));
