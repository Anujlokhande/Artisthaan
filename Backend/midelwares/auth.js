const userModel = require("../models/user.model");
const artistModel = require("../models/artist.model");
const jwt = require("jsonwebtoken");
const express = require("express");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  // console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized 1" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authArtist = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const artist = await artistModel.findById(decoded._id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    req.artist = artist;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.loggedIn = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log(token);

    if (!token) {
      return res.status(400).json({ message: "Token Is Not Present" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const artist = await artistModel.findById(decoded._id);
    if (artist) {
      return res.status(200).json({ role: "artist", artist });
    }

    const user = await userModel.findById(decoded._id);
    if (user) {
      return res.status(200).json({ role: "user", user });
    }
  } catch (err) {
    console.log(err);
  }
};
