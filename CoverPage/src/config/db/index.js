const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/playList_dev";

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connect to db");
  } catch (error) {
    console.log(error);
    console.log("failed to connect");
  }
}

module.exports = { connect };
