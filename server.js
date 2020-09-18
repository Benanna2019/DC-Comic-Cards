// let comics = require("./databases/apicreation");
// let users = require("./databases/users");
const UserModel = require("./models/usermodel");
const ComicModel = require("./models/comicmodel");
const { postUser, getUsers } = require("./controllers/usercontroller");
const { postComic, getComics } = require("./controllers/comiccontroller");
const { authUser } = require("./controllers/authcontroller");
const express = require("express");
require("dotenv").config();
const comicsRouter = require("./routes/comics");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting to MongoDB

const un = process.env.username;
const pw = process.env.password;
mongoose.connect(
  `mongodb+srv://${un}:${pw}@cluster0.karo6.mongodb.net/ComicsDB?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.set("view engine", "ejs");

//Here I will be setting my default page
app.get("/", (request, response) => {
  const comics = [
    {
      name: "default name",
      description: "default description",
      image: "N/A",
      issued: "N/A",
      createdBy: "User",
    },
  ];
  response.render("comics/index", { comics: comics });
});

//Below I am simply making the path by which I will call the users and return the list of users
app.post("/user", postUser);

//here i am returning all the the users. Working on populating the ComicDB in Mongo

app.get("/users", getUsers);

//Here we are making it possible to create a comic in the database
app.post("/comic", postComic);

//Below I am calling the list of comics and returning all of the comics listed in the comics file
app.get("/comics", getComics);

//This will be the authentication route for the users.
//Primarily will be used upon signing in

app.post("/authenticateuser", authUser);
// async function userLoop() {
//   try {
//     for (let i = 0; i < users.length; i++) {
//       const usersArr = await UserModel.create(users[i]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

app.use("/comics", comicsRouter);
app.listen(4000, () => console.log("The port is running on port 4000"));
