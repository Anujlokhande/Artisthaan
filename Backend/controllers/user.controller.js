const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");
const userService = require("../services/user.services");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { fullname, email, password } = req.body;
    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.registerUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken();
    res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json("email or password is incorrect");
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json("email or password is incorrect");
    }

    const token = user.generateAuthToken();
    //cookie
    res.cookie("token", token);
    req.user = user;
    res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.logoutUser = async (req, res, next) => {
  req.cookies.token = null;
  res.status(200).json({ message: "User Logged Out" });
};

module.exports.getUser = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.saveArt = async (req, res) => {
  try {
    const { listingId } = req.params;
    const userId = req.user._id;
    const newUser = await userService.saveArt({ listingId, userId });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports.isSaved = async (req, res) => {
  try {
    const { listingId } = req.params;
    const userId = req.user._id;
    const saved = await userService.isSaved({ listingId, userId });
    if (saved) {
      return res.status(200).json({ saved: true });
    } else {
      return res.status(200).json({ saved: false });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
