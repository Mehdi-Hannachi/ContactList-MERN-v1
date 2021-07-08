const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const user = require("./routes/user");

const app = express();
// app.use(cors());

app.use(express.json());

connectDB();

app.use("/user", user);

const PORT = process.env.port;

app.listen(PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`Server connected on port ${PORT}`);
});
