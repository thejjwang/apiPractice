let btn = document.getElementById('btn');
let joke = document.getElementById('joke');
let joke2 = document.getElementById('joke2');
let joke3 = document.getElementById('joke3');
let joke4 = document.getElementById('joke4');
let joke5 = document.getElementById('joke5');
let joke6 = document.getElementById('joke6');


btn.addEventListener('click', myFunction);
function myFunction(){
    fetch('https://api.chucknorris.io/jokes/random?category=science', {
        method: "GET"
})
    .then(response => response.json())
    .then(data => {
            joke.innerText = data.value;
            console.log(data)
        })
        }
