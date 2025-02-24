const artistModel = require("../models/artist.model");
const { validationResult } = require("express-validator");
const artistServices = require("../services/artist.services");

module.exports.registerArtist = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { email, password, fullname, phone, profilePic } = req.body;
    const isArtistExists = await artistModel.findOne({ email });
    if (isArtistExists) {
      return res.status(400).json({ message: "Artist Already Exists" });
    }

    const hashPassword = await artistModel.hashPassword(password);
    const artist = await artistServices.registerArtist({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      phone,
      profilePic: profilePic || undefined,
    });

    const token = await artist.generateAuthToken();
    res.status(201).json({ artist, token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.loginArtist = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;
  try {
    const artist = await artistModel.findOne({ email }).select("+password");
    if (!artist) {
      return res
        .status(400)
        .json({ message: "Email Or Password Is Incorrect" });
    }

    const isMatched = await artist.comparePassword(password);
    if (!isMatched) {
      return res
        .status(400)
        .json({ message: "Email Or Password Is Incorrect" });
    }

    const token = artist.generateAuthToken();
    req.artist = artist;
    res.cookie("token", token);
    res.status(200).json({ artist, token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.logoutArtist = async (req, res, next) => {
  if (req.headers.authorization) {
    req.headers.authorization = null;
  }
  res.clearCookie("token");
  res.status(200).json({ message: "Logged Out" });
};

module.exports.getArtist = async (req, res, next) => {
  res.status(200).json({ artist: req.artist });
};
