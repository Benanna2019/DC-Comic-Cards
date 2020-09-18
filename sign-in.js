function signIn() {
  fetch("http://localhost:4000/users")
    .then((resp) => resp.json())
    .then((json) => validateSignIn(json));
}

function validateSignIn(json) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let succes = false;
  json.map((el) => {
    if (el.username === username && el.password === password) {
      success = true;
    }
  });
  if (success) {
    getUserComics(username);
    // renderUser();
  } else {
    alert("Invalid login");
  }
}
