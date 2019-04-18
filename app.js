// DOM ELEMENTS ========================================================
const startReset    = document.getElementById("startReset");
const scoreValue    = document.getElementById("score");
const timer         = document.getElementById("timer");

// GLOBAL GAME VARIABLES ===============================================
let playing = false;
let score;

// GAME OPERATIONS =====================================================
// Start/Reset Functionality
startReset.onclick = function() {
    // Reset Game
    if(playing === true) {

        // Reload page
        location.reload();
        
    } 
        // Start Playing
        else {
            // Change mode from not playing to playing
            playing = true;

            // Change start button to reset button
            startReset.innerHTML = "Reset Game";
            
            // Put score back to 0
            score = 0;

            // Update HTML with score
            scoreValue.innerHTML = score;

            // Display timer
            timer.style.display = "block";
        }
}
