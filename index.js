let btn = document.getElementById('btn');
let gender = document.getElementById('gender');
let address = document.getElementById('address');
let email = document.getElementById('email');
let cell = document.getElementById('cell');
let name = document.getElementById('name');
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let img = document.getElementById('img');

btn.addEventListener('click', myFunction);
async function myFunction(){
    let response = await fetch('https://randomuser.me/api/');
    let results = await response.json();
    firstName.innerText = results.results[0].name.first;
    lastName.innerText = results.results[0].name.last;
    gender.innerText = results.results[0].gender;
    address.innerText = results.results[0].location.city;
    email.innerText = results.results[0].email;
    cell.innerText = results.results[0].cell;
    img.src = results.results[0].picture.large;
}
//     fetch('https://randomuser.me/api/', {
//         method: "GET"
// })
//     .then(response => response.json())
//     .then(data => {
//             firstName.innerText = data.results[0].name.first;
//             lastName.innerText = data.results[0].name.last;
//             gender.innerText = data.results[0].gender;
//             address.innerText = data.results[0].location.city;
//             email.innerText = data.results[0].email;
//             cell.innerText = data.results[0].cell;
//             img.src = data.results[0].picture.large;
//         })
//         }
let joke = document.getElementById('joke');
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', getJoke);
async function getJoke(){
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await response.json();
    console.log(data);
    joke.innerText = data.value;
}