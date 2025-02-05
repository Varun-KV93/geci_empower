const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Seller = require("./sellerModel");

const Story = sequelize.define(
  "Story",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    SELLER_ID: { type: DataTypes.INTEGER },
    PICTURE: { type: DataTypes.STRING(500) },
    STATUS: { type: DataTypes.STRING(100) },
    CREATED_ON: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "STORY", timestamps: false }
);

Story.belongsTo(Seller, { foreignKey: "SELLER_ID" });

module.exports = Order;
