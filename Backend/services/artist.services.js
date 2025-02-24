const artistModel = require("../models/artist.model");

module.exports.registerArtist = async ({
  firstname,
  lastname,
  email,
  password,
  phone,
  profilePic,
}) => {
  if (!email || !password || !firstname || !phone) {
    throw new Error("All fields are required");
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
  });
  return artist;
};
