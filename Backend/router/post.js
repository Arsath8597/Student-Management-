const express = require("express");
const app = express();
const product = require("../controller/post");

// Add Product
app.post("/add", product.addPost);

// Get All Products
app.get("/get/:userId", product.getAllPosts);

// Delete Selected Product Item
app.get("/delete/:id", product.deleteSelectedPosts);

// Update Selected Product
app.post("/update", product.updateSelectedPosts);

// Search Product
app.get("/search", product.searchPosts);

// http://localhost:4000/api/product/search?searchTerm=fa

module.exports = app;
