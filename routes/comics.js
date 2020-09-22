const express = require("express");
const User = require("./../models/usermodel");
const Comic = require("./../models/comicmodel");
const router = express.Router();

router.get("/new", (request, response) => {
  response.render("comics/new", { comic: new Comic() });
});

router.get("/_id", async (request, response) => {
  let comic = await Comic.findById(request.params.id);
  if (comic == null) response.redirect("/");
  response.render("comics/shows", { comic: comic });
  // response.send(request.params.id);
});

router.post("/", async (request, response) => {
  let comic = new Comic({
    name: request.body.name,
    description: request.body.descrition,
    image: request.body.image,
    issued: request.body.issued,
  });
  try {
    comic = await comic.save();
    response.redirect(`/comics/${comic.id}`);
  } catch (error) {
    console.log(error);
    response.render("comics/new", { comic: comic });
  }
});

module.exports = router;
