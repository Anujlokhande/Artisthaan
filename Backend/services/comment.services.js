const commentModel = require("../models/comments.model");

module.exports.createComment = async ({ comment, owner }) => {
  if (!comment) {
    throw new Error("Comment is Required in services");
  }

  const newComment = await commentModel.create({
    comment,
    owner,
  });

  return newComment;
};
