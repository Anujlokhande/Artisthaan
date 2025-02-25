const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const artistSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
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

  city: {
    type: String,
    required: true,
  },
  //profile img
  profilePic: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg",
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

artistSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

artistSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

artistSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const artistModel = mongoose.model("Artist", artistSchema);
module.exports = artistModel;
