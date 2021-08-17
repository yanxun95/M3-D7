window.onload = () => {

    displayUser();
    displayUsername();
}

const rowUser = document.querySelector(".row.all-user");
const rowUsername = document.querySelector(".row.all-user-name");
let userArr = [];

const displayUser = async (filter = "https://jsonplaceholder.typicode.com/users") => {
    let response = await fetch(filter);
    let users = await response.json();
    userArr = users;
    rowUser.innerHTML = ""

    userArr.forEach(user => {
        rowUser.innerHTML += `<div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">
                <p>ID: ${user.id}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
              </p>
            </div>
          </div>
        </div>`
    });
}

const displayUsername = async (filter = "https://jsonplaceholder.typicode.com/users") => {
    let response = await fetch(filter);
    let users = await response.json();

    users.forEach(user => {
        rowUsername.innerHTML += `<div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              </p>
            </div>
          </div>
        </div>`
    });
}

const getUserInput = (e) => {
    let query = e.target.value;
    // let query = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    if (query.length > 3) {
        let searchFilter = document.querySelector(".custom-select").value;
        filterUser(query, searchFilter);
    } else if (query.length == 0) {
        filterUser();
    }
}

// const capitalizeFirstLetter = (str) => {

// }

const filterUser = (query, filter) => {
    filter == "name" ? displayUser(`https://jsonplaceholder.typicode.com/users?name=${query}`)
        : filter == "username" ? displayUser(`https://jsonplaceholder.typicode.com/users?username=${query}`)
            : filter == "email" ? displayUser(`https://jsonplaceholder.typicode.com/users?email=${query}`)
                : displayUser();
}

