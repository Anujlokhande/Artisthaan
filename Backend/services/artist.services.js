const artistModel = require("../models/artist.model");

module.exports.registerArtist = async ({
  firstname,
  lastname,
  email,
  password,
  phone,
  profilePic,
  city,
}) => {
  if (!email || !password || !firstname || !phone || !city) {
    throw new Error("All fields are required");
  }

  if (!phone) {
    throw new Error("Phone number is required.");
  }

  const artist = await artistModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    phone,
    profilePic,
    city,
  });

  return artist;
};
