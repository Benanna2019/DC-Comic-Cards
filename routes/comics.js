const express = require("express");
const User = require("./../models/usermodel");
const Comic = require("./../models/comicmodel");
const router = express.Router();

router.get("/new", (request, response) => {
  response.render("comics/new", { comics: new Comic() });
});

router.post("/", async (request, response) => {
  let comic = new Comic({
    name: request.body.name,
    descrition: request.body.descrition,
    image: request.body.image,
    issued: request.body.issued,
    createdBy: request.body.createdBy,
  });
  try {
    comic = await comic.save();
    response.redirect(`/comics/${comic.id}`);
  } catch (error) {
    console.log(error);
    response.render("comcis/new", { comic: comic });
  }
});

module.exports = router;
