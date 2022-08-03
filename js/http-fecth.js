'use strict';

const user = 'https://jsonplaceholder.typicode.com/users/1';
const peopleListEl = document.querySelector('#people');

// gauti ir atspausdinti consoleje objekta
fetch(url)
.then((resp) => resp.json())
.then((dataInJs) => console.log(dataInJs))
.catch((err) => console.warn(err));
