// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js'

const playButton = document.getElementById('play-button');
const currentResults = document.getElementById('current-results');
const winDisplay = document.getElementById('number-of-wins');
const lossDisplay = document.getElementById('number-of-losses');
const totalDisplay = document.getElementById('total')

// initialize state
let wins = 0;
let losses = 0;
let draw = 0;
let total = 0;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    total++;
    const computerPlay = Math.floor(Math.random() * 3) + 1;
    const computerRps = getRandomThrow(computerPlay);

    const selectedButton = document.querySelector('input[type="radio"]:checked');

    const userRps = selectedButton.value;

});