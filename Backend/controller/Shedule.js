const Sales = require("../models/Shedule");
const soldStock = require("./soldStock");

// Add Sales
const addSales = (req, res) => {
  const addSale = new Sales({
    userID: req.body.userID,
    ProductID: req.body.productID,
    StoreID: req.body.storeID,
    Title: req.body.Title,
    SaleDate: req.body.saleDate,
    Discription: req.body.Discription,
  });

  addSale
    .save()
    .then((result) => {
      soldStock(req.body.productID, req.body.stockSold);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};



module.exports = { addSales};
