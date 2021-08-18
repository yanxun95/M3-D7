const rowUser = document.querySelector(".row.all-user");
const rowUsername = document.querySelector(".row.all-user-name");
let userArr = [];
let userInput = "";

window.onload = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    userArr = users;

    initDisplayUser(userArr);
    displayUsername();
}


function initDisplayUser(userArr) {
    rowUser.innerHTML = ""
    // rowUser.innerHTML = userArr.map((user) => `
    //         <div class="col-sm">
    //             <div class="card" style="width: 18rem">
    //                 <div class="card-body">
    //                 <h5 class="card-title">${user.name}</h5>
    //                     <p class="card-text">
    //                         <p>ID: ${user.id}</p>
    //                         <p>Username: ${user.username}</p>
    //                         <p>Email: ${user.email}</p>
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     `).join("")

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

const displayUsername = () => {
    console.log(userArr)
    userArr.forEach(user => {
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
    userInput = e.target.value;
    let query = userInput.split(' ').map(capitalize).join(' ');

    const finalQuery = userArr.filter(user =>
        user.name.includes(query)
    )

    if (query.length > 0) {
        let searchFilter = document.querySelector(".custom-select").value;
        initDisplayUser(finalQuery)
    } else if (query.length == 0) {
        initDisplayUser(userArr);
    }
}

const capitalize = (userInput) => {
    return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}


