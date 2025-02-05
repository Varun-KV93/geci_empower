const sequelize = require("../config/db");

const User = require("./userModel");
const Course = require("./courseModel");
const CourseParticipants = require("./courseParticipantsModel");
const Product = require("./productModel");
const Order = require("./orderModel");
const Seller = require("./sellerModel");
const story = require("./storyModel");
const Orderitemmodel = require("./orderItemModel")

// Define relationships
Course.belongsTo(User, { foreignKey: "USER_ID" });
CourseParticipants.belongsTo(Course, { foreignKey: "COURSE_ID" });
CourseParticipants.belongsTo(User, { foreignKey: "USER_ID" });
Order.belongsTo(User, { foreignKey: "USER_ID" });
Order.belongsTo(Seller, { foreignKey: "SELLER_ID" });
Story.belongsTo(Seller, { foreignKey: "SELLER_ID" });
Orderitemmodel.belongsTo(Order, { foreignKey: "ORDER_ID" });
Orderitemmodel.belongsTo(Product, { foreignKey: "PRODUCT_ID" });
// Sync all models
(async () => {
  await sequelize.sync({ alter: true });
  console.log("✅ All models synchronized!");
})();

module.exports = {
  sequelize,
  User,
  Course,
  CourseParticipants,
  Product,
  Order,
  Seller,
  story,
  Orderitemmodel,
};
