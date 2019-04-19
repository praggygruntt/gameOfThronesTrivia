// DOM ELEMENTS ========================================================

const startReset    = document.getElementById("startReset");
const scoreValue    = document.getElementById("score");
const timer         = document.getElementById("timer");
const timerValue    = document.getElementById("timerValue");
const finalScore    = document.getElementById("finalScore");
const gameOver      = document.getElementById("gameOver");
const correct       = document.getElementById("correct");
const wrong         = document.getElementById("correct");


// GLOBAL GAME VARIABLES ===============================================

let playing = false;
let score;
let action;
let timeRemaining;

// GAME OPERATIONS =====================================================

// Start/Reset Game
startReset.onclick = function() {
    // Reset Game
    if(playing === true) {

        // Reload page
        location.reload(true);

    } 
        // Start Playing
        else {
            // Change mode from not playing to playing
            playing = true;

            // Take Away Game Over Element
            gameOver.style.visibility = "hidden";

            // Change start button to reset button
            startReset.innerHTML = "Reset Game";
            
            // Put score back to 0
            score = 0;

            // Update HTML with score
            scoreValue.innerHTML = score;

            // Display timer
            timer.style.display = "block";
            timeRemaining = 60;

            // Start Countdown
            startCountdown();
        }
}

// Start Countdown Function
const startCountdown = () => {
    // Set timer
    action = setInterval(function(){
        // reduce time by 1 sec
        timeRemaining -= 1;
        // update html
        timerValue.innerHTML = timeRemaining;
        // check if time is out
        if(timeRemaining === 0) {
            stopCountdown();
        }
    }, 100);
};

// Stop Countdown Function
const stopCountdown = () => {
    gameOver.style.visibility = "visible";
    finalScore.innerHTML = score;
    timer.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    clearInterval(action);
};

// Generate Q&A! <-----START HERE ZACH!