const express = require("express");
const app = express();
// const dotenv = require("dotenv");

// dotenv.config();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server start at port ${port}`);
});
