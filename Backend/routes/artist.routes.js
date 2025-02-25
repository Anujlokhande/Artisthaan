const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const artistController = require("../controllers/artist.controller");
const auth = require("../midelwares/auth");

router.post(
  "/register",
  [
    body("email").isEmail().isLength({ min: 5 }),
    body("password").isString().isLength({ min: 5 }),
    body("fullname.firstname").isString().isLength({ min: 3 }),
    body("typeOfArt").isString().notEmpty(),
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
      .isLength({ min: 5 })
      .withMessage("Email Listing Title"),
    body("description")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Email Listing Description"),
    body("image").isString().withMessage("Email Listing Image"),
  ],
  auth.authArtist,
  artistController.createListing
);

router.put(
  "/update/:id",
  [
    body("title")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Invalid Listing Title"),
    body("description")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Invalid Listing Description"),
    body("image").isString().withMessage("Invalid Listing Image"),
  ],
  auth.authArtist,
  artistController.updateListing
);

router.delete("/delete/:id", auth.authArtist, artistController.deleteListing);

router.get("/show", artistController.showListings);

module.exports = router;
