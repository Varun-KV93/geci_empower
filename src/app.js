const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const courseRoutes = require("./routes/courseRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/seller", sellerRoutes);

module.exports = app;
