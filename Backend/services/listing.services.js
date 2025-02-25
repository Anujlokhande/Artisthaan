const Listing = require("../models/listing.model");

module.exports.createListing = async ({
  title,
  description,
  image,
  location,
  country,
  owner,
}) => {
  if (!title || !description || !image || !location || !country || !owner) {
    throw new Error("All fields are required of listing");
  }

  // const listing = await Listing.create({
  //   title,
  //   description,
  //   image,
  //   location,
  //   country,
  // });

  const listing = await Listing.create({
    title,
    description,
    image,
    location,
    country,
    owner,
  });

  return listing;
};

module.exports.updateListing = async (listingId, updateData) => {
  if (!listingId) {
    throw new Error("Listing ID is required");
  }

  const listing = await Listing.findByIdAndUpdate(
    listingId,
    { ...updateData },
    { new: true }
  );

  if (!listing) {
    throw new Error("Listing not found");
  }

  return listing;
};
