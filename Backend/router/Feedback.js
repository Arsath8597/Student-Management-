const express = require("express");
const app = express();
const store = require("../controller/Feedback");

// Add Store 
app.post("/add", store.addStore);

// Get All Store
app.get("/get/:userID", store.getAllStores)

module.exports = app;
