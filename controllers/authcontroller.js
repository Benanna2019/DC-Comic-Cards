const bcrypt = require("bcrypt");

const authUser = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;
    if (!username || !password) {
      return response.status(400).send({ message: "Invalid credentials" });
    }
    const result = await UserModel.find({ username });
    const userResult = result[0];
    if (userResult) {
      if (await bcrypt.compare(password, userResult.password)) {
        return response.status(200).send(userResult);
      } else {
        return response.status(400).send({ message: "incorrect login" });
      }
    } else {
      return response.status(400).send({ message: "incorrect password" });
    }
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { authUser };
