const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const artistController = require("../controllers/artist.controller");
const auth = require("../midelwares/auth");
const jwt = require("jsonwebtoken");
const artistModel = require("../models/artist.model");
const userModel = require("../models/user.model");

router.post(
  "/register",
  [
    body("email").isEmail().isLength({ min: 5 }),
    body("password").isString().isLength({ min: 5 }),
    body("fullname.firstname").isString().isLength({ min: 3 }),
    body("city").isString().isLength({ min: 2 }),
  ],
  artistController.registerArtist
);

router.post(
  "/login",
  [
    body("email").isString().isLength({ min: 5 }).withMessage("Email Invalid"),
    body("password")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Password Invalid"),
  ],
  artistController.loginArtist
);

router.get("/logout", auth.authArtist, artistController.logoutArtist);
router.get("/getArtist", auth.authArtist, artistController.getArtist);

//Listing

router.post(
  "/create",
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Email Listing Title"),
    body("description")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Email Listing Description"),
    body("image").isString().withMessage("Email Listing Image"),
    body("typeOfArt")
      .isString()
      .isLength({ min: 2 })
      .withMessage("Invalid Art Type"),
    body("price").isString().withMessage("Price Is Invalid"),
  ],
  auth.authArtist,
  artistController.createListing
);

router.put(
  "/update/:id",
  // [
  //   body("title")
  //     .isString()
  //     .isLength({ min: 3 })
  //     .withMessage("Invalid Listing Title"),
  //   body("description")
  //     .isString()
  //     .isLength({ min: 3 })
  //     .withMessage("Invalid Listing Description"),
  //   body("image").isString().withMessage("Invalid Listing Image"),
  // ],
  auth.authArtist,
  artistController.updateListing
);

router.delete("/delete/:id", auth.authArtist, artistController.deleteListing);

router.get("/show", artistController.show);
router.get("/show/:id", artistController.showListing);

//who logged in

router.get("/loggedIn", async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
      return res.status(400).json({ message: "Token Is Not Present" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const artist = await artistModel.findById(decoded._id).populate("arts");
    if (artist) {
      return res.status(200).json({ role: "artist", artist });
    }

    const user = await userModel.findById(decoded._id);
    if (user) {
      return res.status(200).json({ role: "user", user });
    }

    return res.status(404).json({ message: "User or Artist not found" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "err" });
  }
});

router.get("/artOwner/:id", auth.artOwner);

module.exports = router;
