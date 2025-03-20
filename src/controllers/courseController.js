const Course = require("../models/courseModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();

// @route POST /api/course/add
exports.add = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const {
      NAME,
      DESCRIPTION,
      COURSE_URL,
      USER_ID,
    
    } = req.body;

    const newCourse = await Course.create({
      NAME,
      DESCRIPTION,
      COURSE_URL,
      USER_ID,
  
    });

    res.status(201).json({
      message: "course added successfully",
      course: newCourse,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


