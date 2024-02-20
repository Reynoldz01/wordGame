//Get word from array and randomise it.
var words = ["words", "marks", "apple"];
var random = Math.floor(Math.random() * words.length);
var wordChoice = words[random];
console.log(wordChoice);

var guessedLetters = []; // Array to store correctly guessed letters
var attemptCount = 0; //Count for the number of guesses.

//Showcase letterboxes on screen
function initializeLetterBoxes() {
    const letterBoxes = document.getElementsByClassName("letterBox");
    for (let i = 0; i < letterBoxes.length; i++) {
        letterBoxes[i].textContent = "_";
    }
}

// Call the function when the page loads
window.onload = initializeLetterBoxes;
function guess() {
    attemptCount++;
    var textInput = document.getElementById("guessAns").value;
    const guessArray = textInput.split("");
    const letterBoxes = document.getElementsByClassName("letterBox");

    // Check if guessed letters are in the word and not already guessed
    for (let i = 0; i < guessArray.length; i++) {
        if (wordChoice.includes(guessArray[i]) && !guessedLetters.includes(guessArray[i])) {
            guessedLetters.push(guessArray[i]); // Store guessed letters if they are in the word and not already guessed
        }
    }

    // Update the letter boxes based on guessed letters
    for (let i = 0; i < letterBoxes.length; i++) {
        if (guessedLetters[i]) {
            letterBoxes[i].textContent = guessedLetters[i];
        } else {
            letterBoxes[i].textContent = "_";
        }
    }


    // Check if guessed word matches the chosen word
    if (textInput === wordChoice) {
        alert("Congratulations! You guessed the word in " + attemptCount + " guess(s), the word was " + wordChoice);
    }
}




//random comment things/ideas

//change every letter into an array, compare against random word letter placement