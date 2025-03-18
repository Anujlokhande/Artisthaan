const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrOrNoiR7Hj_ctmI_-a5uShS8470JVJuWXg&s",
  },
  typeOfArt: {
    type: String,
    required: true,
    enum: [
      "Painting",
      "Sculpture",
      "Photography",
      "Digital Art",
      "Mixed Media",
      "Other",
    ],
  },
  location: String,
  country: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
