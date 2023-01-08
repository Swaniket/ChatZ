const express = require("express");
const dotenv = require("dotenv").config();
const { chats } = require("./dummyData");

const app = express();
const PORT = process.env.PORT || 8000;

// Routes
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat)
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
