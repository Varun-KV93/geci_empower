const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Course = require("./courseModel");
const User = require("./userModel");

const CourseParticipants = sequelize.define(
  "CourseParticipants",
  {
    COURSE_ID: { type: DataTypes.INTEGER, allowNull: false },
    USER_ID: { type: DataTypes.INTEGER, allowNull: false },
    CREATED_ON: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "COURSE_PARTICIPANTS", timestamps: false }
);

CourseParticipants.belongsTo(Course, { foreignKey: "COURSE_ID" });
CourseParticipants.belongsTo(User, { foreignKey: "USER_ID" });

module.exports = CourseParticipants;
