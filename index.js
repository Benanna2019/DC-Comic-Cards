function getUserComics(username) {
  fetch(`http://localhost:4000/comics?username=${username}`)
    .then((resp) => resp.json())
    .then((json) => updateUserComic(json));
}

function updateUserComic(comics) {
  document.getElementById("comic-card").innerHTML = "";
  comics.map(
    (el) =>
      (document.getElementById(
        "comic-card"
      ).innerHTML += `<div class="card" style="width: 18rem;">
       <img class="card-img-top" src="${el.img}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">${el.description}</p>
        <p class="card-text">${el.issued}</p>
        </div>
       </div>`)
  );
}

function renderUser() {
  fetch("http://localhost:4000/users")
    .then((resp) => resp.json())
    .then((json) => displayUsers(json));
}

function displayUsers(json) {
  json.map(
    (el) =>
      (document.getElementById(
        "usernames"
      ).innerHTML += `<button onclick="getUserComic('${el.username}')">${el.username}</button>`)
  );
}
