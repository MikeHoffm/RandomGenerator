/* Concept

Select the element with class .randomize on the HTML
when clicked change to a different letter of the alphabetet
*/

// DOM Buttons
const letterBtn = document.querySelector('#letter-btn');
const letterContain = document.querySelector('.letter-contain');

const numBtn = document.querySelector('#num-btn');
const numContain = document.querySelector('.num-contain');

// When button is clicked, change text
numBtn.onclick = () => console.log('Clicked');

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

// When letter button is clicked, run function that changes letterContainer innertext
function changeLetter() {
  letterContain.innerText = randomLetter();
}

letterBtn.onclick = () => changeLetter();
// when button is clicked, change to random letter

// Number button functionality
function changeNum() {
  numContain.innerText = randomNum();
}

numBtn.onclick = () => changeNum();
