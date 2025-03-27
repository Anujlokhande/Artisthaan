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
      "Chittara art",
      "Madhubani painting",
      "Warli painting",
      "Digital Art",
      "Mixed Media",
      "Other",
    ],
  },
  price: {
    type: String,
    required: true,
  },
  location: String,
  country: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  },

  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "comments",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
