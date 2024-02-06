"use strict";

document.addEventListener('DOMContentLoaded', function() {
    let min;
    let max;
    let guess;
    let resultDiv = document.getElementById('guess');

    function startGuessing() {
        min = 1;
        max = 100;
        makeGuess();
    }

    function guessHigher() {
        min = guess + 1;
        makeGuess();
    }

    function guessLower(){
        max = guess - 1;
        makeGuess();
    }

    function makeGuess(){
        guess = Math.floor((min + max) / 2); // Use binary search to guess
        resultDiv.innerHTML = `<p>Is your number ${guess}?</p>`;
    }

    function correctGuess(){
        resultDiv.innerHTML = `<p>Yay! I guessed your number, which was ${guess}!</p>`;
        disableButtons();
    }

    function disableButtons(){
        document.getElementById('higher-btn').disabled = true;
        document.getElementById('lower-btn').disabled = true;
    }

    document.getElementById('start-btn').addEventListener('click', startGuessing);
    document.getElementById('higher-btn').addEventListener('click', guessHigher);
    document.getElementById('lower-btn').addEventListener('click', guessLower);
    document.getElementById('correct-btn').addEventListener('click', correctGuess);
});

