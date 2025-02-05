const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Loans = sequelize.define(
  "Loans",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    BANK: { type: DataTypes.STRING(100) },
    URL: { type: DataTypes.STRING(100) },

  },
  { tableName: "LOANS", timestamps: false }
);



module.exports = Loans;
