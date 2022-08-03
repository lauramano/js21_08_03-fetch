'use strict';

const h1El = document.querySelector('h1');

fetch('one.txt')
.then((response) => {
    console.log(response);

// isitikinti kad uzklausa sekminga
// response.ok - status 200 - 299
if(!response.ok){
    throw 'there was erorr: ' + response.status + ' ' + response.statusText;
}
//  istraukti teksta is atsakymo
return response.text();
})
.then((data) =>{
    console.log(data);
    h1El.textContent = data;
} )
.catch((err) => console.log(err));

// gauta texta su fetch ikelti i h1
// fetch('data/two.txt11')
//   .then((resp) => resp.text())
//   .then((data) => (h1El.textContent = data))
//   .catch((err) => console.log(err));


// fetch and console log user1.json
fetch('date/user1.json')
  .then((resp) => resp.json())
  .then((data) => console.log('user1', data))
  .catch((err) => console.log(err));

// gauti ir atspausdinti consoleje pirma zmogu is people.json