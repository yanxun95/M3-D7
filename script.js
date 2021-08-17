window.onload = () => {
    getUser();
}

const getUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data)
    // .then((response) => response.json())
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch(err => {
    //     console.log("rejected");
    //     console.error(err);
    // });
    // console.log("test")
}