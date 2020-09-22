//Creating my mongoose schema for my users and comic databases

const mongoose = require("mongoose");
const UserModel = require("./usermodel");

const comicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  issued: { type: Number },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  //   required: true,
  // },
});

const ComicModel = mongoose.model("comic", comicSchema);

module.exports = ComicModel;
