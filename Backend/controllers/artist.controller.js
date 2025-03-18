const artistModel = require("../models/artist.model");
const Listing = require("../models/listing.model");
const listingService = require("../services/listing.services");
const { validationResult } = require("express-validator");
const artistServices = require("../services/artist.services");

module.exports.registerArtist = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { email, password, fullname, phone, profilePic, city } = req.body;
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
      city,
    });
    req.artist = artist;

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

//Listing

module.exports.createListing = async (req, res, next) => {
  if (!req.artist) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Please login first." });
  }

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { title, description, image, location, country, typeOfArt } =
      req.body;
    const listing = await listingService.createListing({
      title,
      description,
      image: image || undefined,
      location,
      country,
      owner: req.artist._id,
      typeOfArt,
    });

    listing.owner = req.artist._id;

    console.log(listing, req.artist);
    res.status(200).json({ listing });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.updateListing = async (req, res, next) => {
  if (!req.artist) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Please login first." });
  }

  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.owner.toString() !== req.artist._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this listing" });
    }

    const updates = req.body;
    // console.log(updates);

    const updatedListing = await listingService.updateListing(id, updates);

    res.status(200).json({ listing: updatedListing });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.deleteListing = async (req, res, next) => {
  if (!req.artist) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Please login first." });
  }

  const { id } = req.params;
  console.log(id);

  try {
    const listing = await Listing.findById(id);

    if (req.artist._id.toString() != listing.owner.toString()) {
      return res
        .status(401)
        .json({ message: "You are not authorized to delete this Listing" });
    }

    const deletedListing = await Listing.findByIdAndDelete(id);
    res.status(200).json({ listing });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.show = async (req, res, next) => {
  const allListings = await Listing.find();
  res.status(200).json(allListings);
};

module.exports.showListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id).populate("owner");
    res.status(200).json(listing);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
