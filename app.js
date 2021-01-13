// import functions and grab DOM elements
const playButton = document.getElementById('play-button');
const winDisplay = document.getElementById('number-of-wins');
const lossDisplay = document.getElementById('number-of-losses');
const totalDisplay = document.getElementById('total')

// initialize state
let wins = 0;
let losses = 0;
let draw = 0;
let total = 0;

// set event listeners to update state and DOM