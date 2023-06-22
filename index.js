let btn = document.getElementById('btn');
let jokeContainer = document.getElementById('joke-container');
let joke = document.getElementById('joke');


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
