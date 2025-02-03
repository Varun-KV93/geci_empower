const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRoutes);

module.exports = app;
