"use strict"

let min = 1;
let max = 100;
let guess;
let resultDiv = document.getElementById('guess');

function startGuessing(){
guess = Math.floor(Math.random()*(max-min+1))+min;
resultDiv.innerHTML = `<p>Is your number ${guess}</p>`;
document.getElementById('higher-btn').disabled = false;
document.getElementById('lower-btn').disabled = false;
}

function guessHigher() {
    min = guess + 1;
    makeGuess();
}

function guessLower() {
    max = guess -1;
    makeGuess();
}

function makeGuess() {
    guess = Math.floor(Math.random()*(max-min+1)) + min;
    resultDiv.innerHTML = `<p>Is your number ${guess}?</p>`;
}

function correctGuess() {
    resultDiv.innerHTML = `<p>Yay! Your number was ${guess}!</p>`;
    document.getElementById('higher-btn').disabled=true;
    document.getElementById('lower-btn').disabled=true;
}


