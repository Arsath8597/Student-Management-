const mongoose = require("mongoose");

const SheduleSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
     
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
     
    },
    StoreID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
     
    },
    Title: {
      type: String,
      required: true,
    },
    SaleDate: {
      type: String,
      required: true,
    },
    Discription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Shedule = mongoose.model("Shedule", SheduleSchema);
module.exports = Shedule;
