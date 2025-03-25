const commentService = require("../services/comment.services");
const listingModel = require("../models/listing.model");

module.exports.createComment = async (req, res) => {
  const { comment } = req.body;

  const { listingId } = req.params;

  try {
    const user = req.user;
    const owner = user._id;

    const newComment = await commentService.createComment({ comment, owner });

    const listing = await listingModel
      .findByIdAndUpdate(
        listingId,
        {
          $push: { comments: newComment },
        },
        { new: true }
      )
      .populate("comments")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
        },
      });
    res.status(200).json(listing);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
