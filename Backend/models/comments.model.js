const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    min: [3, "Comment Should Be Atleast 3 letters Long"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const comments = mongoose.model("comments", commentsSchema);
module.exports = comments;
