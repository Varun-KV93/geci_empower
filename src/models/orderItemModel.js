const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Order = require("./orderModels");
const Product = require("./productModel");

const Orderitemmodel = sequelize.define(
  "Orderitemmodel",
  {
    ORDER_ID: { type: DataTypes.INTEGER, allowNull: false },
    PRODUCT_ID: { type: DataTypes.INTEGER },
    QUANTITY: { type: DataTypes.INTEGER },
    AMOUNT: { type: DataTypes.INTEGER },
  },
  { tableName: "ORDER_ITEM", timestamps: false }
);

Orderitemmodel.belongsTo(Order, { foreignKey: "ORDER_ID" });
Orderitemmodel.belongsTo(Product, { foreignKey: "PRODUCT_ID" });

module.exports = Order;
