let btn = document.getElementById('btn');
let jokeContainer = document.getElementById('joke-container');
let joke = document.getElementById('joke');
let btn2 = document.getElementById('btn2');
let jokeContainer2 = document.getElementById('joke-container2');
let joke2 = document.getElementById('joke2');

btn.addEventListener('click', fetchApi);
function fetchApi() {
    fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
           .then(response => response.json())
           .then(data => {
                joke.innerText = data.joke;
                jokeContainer.style.display = 'block';
            })
           .catch(err => console.log(err));
    }
btn2.addEventListener('click', fetchApi2);
function fetchApi2() {
    fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
            .then(response => response.json())
            .then(data => {
                joke2.innerText = data.value;
                jokeContainer2.style.display = 'block';
            })
            .catch(err => console.log(err));
    }