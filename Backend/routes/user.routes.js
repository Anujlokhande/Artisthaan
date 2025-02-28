const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const auth = require("../midelwares/auth");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid First Name"),
    body("email").isString().isLength({ min: 5 }).withMessage("Invalid Email"),
    body("password")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Invalid Password"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isString().isLength({ min: 5 }).withMessage("Invalid Email"),
    body("password")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Invalid Password"),
  ],
  userController.loginUser
);

router.get("/logout", auth.authUser, userController.logoutUser);
router.get("/getUser", userController.getUser);

module.exports = router;
