const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const { chats } = require("./dummyData");
const connectDB = require("./config/db");
const userRoutes = require("./routes/useRoutes");

const app = express();
connectDB();
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.green.bold);
});
