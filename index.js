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

async function myFunction() {
  try {
    const [userDataResponse, quoteDataResponse] = await Promise.all([
      fetch('https://randomuser.me/api/'),
      fetch('https://api-ninjas.com/api/quotes')
    ]);

    const userData = await userDataResponse.json();
    const quoteData = await quoteDataResponse.json();

    const user = userData.results[0];
    const quote = quoteData.data[0];

    firstName.innerText = user.name.first;
    lastName.innerText = user.name.last;
    gender.innerText = user.gender;
    address.innerText = user.location.city;
    email.innerText = user.email;
    cell.innerText = user.cell;
    img.src = user.picture.large;
    quote.innerText = quote.quote;
  } catch (error) {
    console.error('Error:', error);
  }
}
