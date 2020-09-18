const ComicModel = require("./../models/comicmodel");

const postComic = async (request, response) => {
  try {
    console.log("create a comic");
    const comicInstance = new ComicModel(request.body);
    const createdComic = await ComicModel.create(comicInstance);
    response.status(200).send(createdComic);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getComics = async (request, response) => {
  try {
    console.log("getting all comics");
    const comics = await ComicModel.find();
    response.status(200).send(comics);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { postComic, getComics };
