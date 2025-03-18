const mongoose = require("mongoose");
const data = require("./sample.js");
const Listing = require("../models/listing.model.js");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/artisthaan");
}

main()
  .then(() => {
    console.log("Working");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany();
  await Listing.insertMany(data.data);
  console.log("Data Was Initialized");
};

initDB();
