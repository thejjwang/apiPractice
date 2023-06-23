let btn = document.getElementById('btn');
let gender = document.getElementById('gender');
let address = document.getElementById('address');
let email = document.getElementById('email');
let cell = document.getElementById('cell');
let name = document.getElementById('name');
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let img = document.getElementById('img');
let quote = document.getElementById('quote');

btn.addEventListener('click', myFunction);
async function myFunction(){
    const quoteResponse = await fetch('https://api.chucknorris.io/jokes/random');
    const quoteResults = await quoteResponse.json();
    quote.innerText = quoteResults.value;
    let response = await fetch('https://randomuser.me/api/');
    let results = await response.json();
    firstName.innerText = results.results[0].name.first;
    lastName.innerText = results.results[0].name.last;
    gender.innerText = results.results[0].gender;
    address.innerText = results.results[0].location.city;
    email.innerText = results.results[0].email;
    cell.innerText = results.results[0].cell;
    img.src = results.results[0].picture.large;
    // randomQuote();
}

// async function randomQuote(){
//     let response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?');
//     let data = await response.json();
//     quote.innerText = data.quoteText;
//     console.log(data)
// }
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
