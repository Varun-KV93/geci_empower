const express = require("express");
const { add } = require("../controllers/sellerController");
const { body } = require("express-validator");

const router = express.Router();

// Register Route
router.post(
  "/add",
  [
    body("COMPANY_NAME").notEmpty().withMessage("Name is required"),
    body("DESCRIPTION").notEmpty().withMessage("Description is required"),
  ],
  add
);

module.exports = router;
