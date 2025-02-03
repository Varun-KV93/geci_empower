const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Seller = sequelize.define(
  "Seller",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    COMPANY_NAME: { type: DataTypes.STRING(100) },
    DESCRIPTION: { type: DataTypes.STRING(500) },
    CREATED_ON: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "SELLER", timestamps: false }
);

module.exports = Seller;
