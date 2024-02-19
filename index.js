// ** Concept **
// Use DOM Manipulation to generate a random letter, & number between 0-100
// TO DO  - CSS: Edit to be visually appealing
// TO DO - JS : Hide functionality from global scope, add sound effects

// DOM Buttons
const letterBtn = document.querySelector('#letter-btn');
const numBtn = document.querySelector('#num-btn');
const resetBtn = document.querySelector('#reset-btn');

// DOM Elements - Other
const letterContain = document.querySelector('.letter-contain');
const numContain = document.querySelector('.num-contain');

// When button is clicked, change text
resetBtn.onclick = () => console.log('Clicked');

// Create a function randomize() to randomly select a letter from the alphabet

// Returns a random number based on maximum integer value given
function randomize(max) {
  const randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
// Return a random letter using randomGen function
function randomLetter() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

  const { length } = alphabet;
  const randomized = alphabet[randomize(length)];
  return randomized;
}

// create a function to randomize() a random number from 1 - 100
function randomNum() {
  const randomNum = randomize(101);
  return randomNum;
}

// Letter button functionality
function changeLetter() {
  letterContain.innerText = randomLetter();
}

letterBtn.onclick = () => changeLetter();

// Number button functionality
function changeNum() {
  numContain.innerText = randomNum();
}

numBtn.onclick = () => changeNum();

// Reset button functionality
function resetAll() {
  numContain.innerText = 0;
  letterContain.innerText = 'A';
}
resetBtn.onclick = () => resetAll();
