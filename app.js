
// DOM ELEMENTS ========================================================

const startReset    = document.getElementById("startReset");
const scoreValue    = document.getElementById("score");
const timer         = document.getElementById("timer");
let timerValue    = document.getElementById("timerValue");
let finalScore    = document.getElementById("finalScore");
const gameOver      = document.getElementById("gameOver");
const correct       = document.getElementById("correct");
const wrong         = document.getElementById("wrong");
const questionElement      = document.getElementById("question")
const choice1       = document.getElementById("choice1");
const choice2       = document.getElementById("choice2");
const choice3       = document.getElementById("choice3");
const choice4       = document.getElementById("choice4");

// GLOBAL GAME VARIABLES ===============================================

let playing = false;
let score;
let action;
let timeRemaining;
let currentTrivia;
// Assets
const questions = [
    {question: "What is the name of Jon's direwolf?", answer: "Ghost", fakes: ["Demon", "Nymeria", "Queen"]}, 
    {question: "At Hoster Tully's funeral, who shot the burning arrow that hit its mark?", answer: "Brynden Tully", fakes: ["Edmure Tully", "Jon Snow", "Ned Stark"]}, 
    {question: "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)?", answer: "Four", fakes: ["Three", "Two", "Zero"]}, 
    {question: "Who is king of Westeros when the the series begins?", answer: "Robert Baratheon", fakes: ["Ned Stark", "Jaime Lannister", "Aerys Targaryan"]}, 
    {question: "Who is the leader of the Unullied Army?", answer: "Greyworm", fakes: ["Tyrion", "The Masters", "Varys"]}, 
    {question: "What continent is ruled by the Seven Kingdoms?", answer: "Westeros", fakes: ["Essos", "Soujos", "The North"]}, 
    {question: "Who is a priest of the Lord of Light?", answer: "Thoros of Myr", fakes: ["Melisandre", "Stannis", "Davos"]}, 
    {question: "At the end of his training, what must an Unsullied kill to prove he has no mercy or weakness?", answer: "A child", fakes: ["A man", "A woman", "A dragon"]}, 
    {question: "Who rules the Twins?", answer: "The Freys", fakes: ["The Tullys", "The Starks", "The Lannisters"]}, 
    {question: "Who wields a sword of fire?", answer: "Beric Dondarrion", fakes: ["The Hound", "The Mountain", "Jaime Lannister"]}, 
    {question: "What is Catelyn Starks maiden name?", answer: "Tully", fakes: ["Frey", "Greyjoy", "Hill"]}, 
    {question: "Who chopped off Jaime's right hand?", answer: "Locke", fakes: ["Bronn", "Tyrion", "Tywin"]}, 
    {question: "Why is Jon allowed to leave the Night's Watch?", answer: "He died", fakes: ["He paid enough gold", "He ran away", "He was promoted"]}, 
    {question: "What is the name of Stannis' daughter?", answer: "Shireen", fakes: ["Melsilvia", "Arya", "Sonya"]}, 
    {question: "Who was the true Baratheon heir after Robert's death?", answer: "Stannis", fakes: ["Renly", "Robert", "Joffrey"]}, 
    {question: "Which actor plays Tyrion?", answer: "Peter Dinklage", fakes: ["Kit Harrington", "Sophie Turner", "Maisie Williams"]}, 
    {question: "What did Cersei use to destroy the Sept of Baelor?", answer: "Wildfire", fakes: ["Cannons", "Dragons", "Assassins"]}, 
    {question: "What killed Renly?", answer: "A shadow", fakes: ["A demon", "A ghost", "A wolf"]}, 
    {question: "What type of wine does a merchant try to kill Dany with?", answer: "Arbor Red", fakes: ["Dornish Red", "Vale White", "Stormland Red"]}, 
    {question: "What is that name of Robb Stark's wife?", answer: "Talisa", fakes: ["Formosa", "Julienne", "Micah"]}, 
    {question: "What side business does Littlefinger run?", answer: "A brothel", fakes: ["A smuggling ring", "An arms trade", "A casino"]}
];  

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
            generate();
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
    }, 1000);
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

const generate = function() {
    currentTrivia = questions[Math.floor(Math.random()*20)];
    let question = currentTrivia.question;
    questionElement.innerHTML = question;
    let correctPosition = 1+Math.floor(Math.random()*3);
    document.getElementById("choice" + correctPosition).innerHTML = currentTrivia.answer;
    for(let i=1; i<5; i++) {
        if(i===correctPosition && i===1) {
            document.getElementById("choice" + (i+1)).innerHTML = currentTrivia.fakes[0];
            document.getElementById("choice" + (i+2)).innerHTML = currentTrivia.fakes[1];
            document.getElementById("choice" + (i+3)).innerHTML = currentTrivia.fakes[2]; 
        }
        if(i===correctPosition && i===2) {
            document.getElementById("choice" + (i-1)).innerHTML = currentTrivia.fakes[0];
            document.getElementById("choice" + (i+1)).innerHTML = currentTrivia.fakes[1];
            document.getElementById("choice" + (i+2)).innerHTML = currentTrivia.fakes[2]; 
        }
        if(i===correctPosition && i===3) {
            document.getElementById("choice" + (i-2)).innerHTML = currentTrivia.fakes[0];
            document.getElementById("choice" + (i-1)).innerHTML = currentTrivia.fakes[1];
            document.getElementById("choice" + (i+1)).innerHTML = currentTrivia.fakes[2]; 
        }
        if(i===correctPosition && i===4) {
            document.getElementById("choice" + (i-3)).innerHTML = currentTrivia.fakes[0];
            document.getElementById("choice" + (i-2)).innerHTML = currentTrivia.fakes[1];
            document.getElementById("choice" + (i-1)).innerHTML = currentTrivia.fakes[2]; 
        }
    }
};

choice1.onclick = function() {
    if (playing) {
        if (choice1.innerHTML === currentTrivia.answer) {
            score ++;
            scoreValue.innerHTML = score;
            correct.style.display = "block";
            setTimeout(function() {
                correct.style.display = "none";
                generate();
            }, 1000)
        } else {
            correct.style.display = "none";
            wrong.style.display = "block";
            setTimeout(function() {
                wrong.style.display = "none";
            }, 1000)
        }
    }
};

choice2.onclick = function() {
    if (playing) {
        if (choice2.innerHTML === currentTrivia.answer) {
            score ++;
            scoreValue.innerHTML = score;
            correct.style.display = "block";
            setTimeout(function() {
                correct.style.display = "none";
                generate();
            }, 1000)
        } else {
            correct.style.display = "none"
            wrong.style.display = "block";
            setTimeout(function() {
                wrong.style.display = "none";
            }, 1000)
        }
    }
}
choice3.onclick = function() {
    if (playing) {
        if (choice3.innerHTML === currentTrivia.answer) {
            score ++;
            scoreValue.innerHTML = score;
            correct.style.display = "block";
            setTimeout(function() {
                correct.style.display = "none";
                generate();
            }, 1000)
        } else {
            correct.style.display = "none"
            wrong.style.display = "block";
            setTimeout(function() {
                wrong.style.display = "none";
            }, 1000)
        }
    }
}
choice4.onclick = function() {
    if (playing) {
        if (choice4.innerHTML === currentTrivia.answer) {
            score ++;
            scoreValue.innerHTML = score;
            correct.style.display = "block";
            setTimeout(function() {
                correct.style.display = "none";
                generate();
            }, 1000)
        } else {
            correct.style.display = "none";
            wrong.style.display = "block";
            setTimeout(function() {
                wrong.style.display = "none";
            }, 1000)
        }
    }
}