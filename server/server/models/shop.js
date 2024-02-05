const { Schema, model } = require("mongoose");
const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
    stateName: {
      type: String,
      required: true,
    },
    cityName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Shop = model("shop", shopSchema);
module.exports = Shop;
