const ComicModel = require("./../models/comicmodel");

const postComic = async (request, response) => {
  try {
    console.log("post a comic");
    const name = request.body.name;
    const description = request.body.description;
    const image = request.body.image;
    const issued = request.body.issued;

    const comic = new ComicModel({
      name,
      description,
      image,
      issued,
    });

    const createdComic = await ComicModel.create(comic);

    response.status(201).send(createdComic);
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
