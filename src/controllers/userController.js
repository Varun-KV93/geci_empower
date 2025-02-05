const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.USER_ID, email: user.EMAIL },
    process.env.JWT_SECRET,
    {
    //  expiresIn: "1h",
    }
  );
};

// @desc Register User
// @route POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const {
      F_NAME,
      L_NAME,
      EMAIL,
      PASSWORD,
      PHONE,
      DOB,
      GENDER,
      ADDRESS_LINE1,
      ADDRESS_LINE2,
      COUNTRY,
      STATE,
      CITY,
      PINCODE,
    } = req.body;

    const existingUser = await User.findOne({ where: { EMAIL } });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(PASSWORD, 10);

    const newUser = await User.create({
      F_NAME,
      L_NAME,
      EMAIL,
      PASSWORD: hashedPassword,
      PHONE,
      DOB,
      GENDER,
      ADDRESS_LINE1,
      ADDRESS_LINE2,
      COUNTRY,
      STATE,
      CITY,
      PINCODE,
    });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(newUser),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Login User
// @route POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { EMAIL, PASSWORD } = req.body;
    const user = await User.findOne({ where: { EMAIL } });

    if (!user || !(await bcrypt.compare(PASSWORD, user.PASSWORD))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", token: generateToken(user) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
