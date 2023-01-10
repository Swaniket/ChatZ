const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.info(`MongoDB Connected: ${connect.connection.host}`.green.bold);
  } catch (error) {
    console.error(`Error Connecting with MongoDB: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
