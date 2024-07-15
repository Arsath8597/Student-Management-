const express = require("express");
const app = express();
const sales = require("../controller/Shedule");

// Add Sales
app.post("/add", sales.addSales);



module.exports = app;

