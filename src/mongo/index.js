const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: "Product already exists.",
  },
  description: String,
  price: Number,
  quantity: Number,
  category: String,
});

const CategoryModel = new mongoose.model("Category", CategorySchema);
const ProductModel = new mongoose.model("Product", ProductSchema);

module.exports = {
  CategoryModel,
  ProductModel,
};
