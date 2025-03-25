const userModel = require("../models/user.model");

module.exports.registerUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All feilds are required");
  }

  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};

module.exports.saveArt = async ({ listingId, userId }) => {
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      {
        $addToSet: { saved: listingId },
      },
      { new: true }
    )
    .populate("saved");

  return user;
};

module.exports.isSaved = async ({ listingId, userId }) => {
  try {
    const user = await userModel.findById(userId).select("saved");
    if (!user) return false;

    return user.saved.includes(listingId);
  } catch (error) {
    console.error("Error checking saved listing:", error);
    return false;
  }
};
