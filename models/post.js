const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: { type: String, required: true },
  imgsrc:
    {
      type: String
    },
  title:
    {
      type: String,
      required: true
    },
  isSaved:
    {
      type: Boolean,
      required: true,
      // default: false ??????
    },
  // url: {type: String, required: true}
  // author: { type: String, required: true },
  // synopsis: String,
  // date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
