//INITIAL VARIABLES
var aBtn = document.querySelector("#a");
var bBtn = document.querySelector("#b");
var cBtn = document.querySelector("#c");
var dBtn = document.querySelector("#d");
var scoreEl = document.querySelector("#time");
var btnzEl = document.querySelector("#btnz");
var questionPrompt = document.querySelector("#questionPrompt");
var currentScore = 60;
var i = 0;
var questions = [
    
    {
        prompt: "What does CSS 1 stand for? \n(a) Carter's Styling Stuff\n(b) Cascading Style Sheet\n(c) Coding Style Sheet\n(d) None of the Above"
        ,answer:"b"
},

{
    prompt: "What does CSS 2 stand for? \n(a) Carter's Styling Stuff\n(b) Cascading Style Sheet\n(c) Coding Style Sheet\n(d) None of the Above"
    ,answer:"b"
},

{
    prompt: "What does CSS 3 stand for? \n(a) Carter's Styling Stuff\n(b) Cascading Style Sheet\n(c) Coding Style Sheet\n(d) None of the Above"
    ,answer:"b"
},

{
    prompt: "What does CSS 4 stand for? \n(a) Carter's Styling Stuff\n(b) Cascading Style Sheet\n(c) Coding Style Sheet\n(d) None of the Above"
    ,answer:"b"
},

{
    prompt: "What does HTML stand for? \n(a) Carter's Styling Stuff\n(b) Cascading Style Sheet\n(c) Coding Style Sheet\n(d) None of the Above"
    ,answer:"c"
}
]

//if

// INITIATE QUIZ AND TIMER
var quizStart = function() {
    var btnID = event.target.getAttribute("id");
    if (i===0) {
        questionPrompt.textContent = questions[i].prompt;
        questionAnswer = questions[i].answer;
        i++
//set timer to count down
var startTimer = setInterval(function(event) {
    if (currentScore >= 1) {
      currentScore--;
      scoreEl.textContent = currentScore;
    } 
    else {
      scoreEl.textContent = '';
      clearInterval(startTimer);
      window.alert("Sorry - you're out of time! Hit refresh to try again.")
      return false
    }
    if (i === questions.length) {
        clearInterval(startTimer);
    }
  }, 1000);

        return false
            };
        };


//MAIN QUIZ FUNCTION

var quizTaking = function() {
if (i < questions.length && currentScore > 0) {
// get the id of the button click
var btnID = event.target.getAttribute("id");

//********TROUBLESHOOTING HERE --> trying to get question answers to match up and change correctly but getting some unexpected behavior *********

var questionAnswer = questions[i].answer;
console.log("questionanswer" + questionAnswer)
//questionPrompt.textContent = questions[i].prompt;
   if (btnID === questionAnswer) {
        currentScore = currentScore + 10;  
        scoreEl.textContent = currentScore;
    };
    if (btnID !== questionAnswer) {
        currentScore = currentScore - 10;
        scoreEl.textContent = currentScore;
        i++;
    };
    if (currentScore < 0) {
        window.prompt("Sorry - you're out of time! Hit refresh to try again.")
    };
    i++;
    
   if(i < questions.length){
       var questionPrompt2 = questions[i].prompt;
    questionPrompt.textContent = questionPrompt2;
};
if (i === questions.length) {
    quizOver();
}
}
};

//QUIZ ENDING AT LAST QUESTION FUNCTION

var quizOver = function() {
    var btnID = event.target.getAttribute("id");
    finalScore = currentScore;
    scoreEl.textContent = finalScore;
    questionPrompt.textContent = "Congratulations - you have finished the quiz with a score of " + currentScore + ".";

    //local storage for high score

    var currentHighscore = localStorage.getItem("highScore");
    if (currentHighscore > finalScore) {
        window.alert("The current high score is " + currentHighscore + ". Hit refresh to try beating it again!")
    }
    else {
        localStorage.setItem("highScore",finalScore);
        window.alert("Congratulations! " + finalScore + " is a new record!")
    }
}


//MASTER FUNCTION:

var mainFunction = function() {
    var btnID = event.target.getAttribute("id");
    if (i === 0) {
        quizStart();
    }
    //else if (i === questions.length) {
     //   quizOver();
   // }
    else {
        quizTaking();
}
console.log(btnID);
};

//MASTER FUNCTION STRUCTURE: starting with the first event click on a button - 1)run start timer to begin countdown 2) enter the function with loop of questions
console.log("Current High Score:" + localStorage.getItem("highScore"))

aBtn.addEventListener("click",mainFunction);
bBtn.addEventListener("click",mainFunction);
cBtn.addEventListener("click",mainFunction);
dBtn.addEventListener("click",mainFunction);