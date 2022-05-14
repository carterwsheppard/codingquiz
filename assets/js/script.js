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
var quizStarted = false;
var questions = [
    
    {
        prompt: "What does CSS 1 stand for? \n(a) Carter's Styling Stuff\n(b) Cascading Style Sheet\n(c) Coding Style Sheet\n(d) None of the Above"
        ,answer:"b"
},

{
    prompt: "What does HTML stand for? \n(a) Hello Text Madeup Language\n(b) Hyperlink Text Meaning Language\n(c) Hypertext Markup Language \n(d) None of the Above"
    ,answer:"c"
},

{
    prompt: "What does the <p> in this div stand for? \n(a) Paragraph\n(b) Parenthesis\n(c) Partition\n(d) None of the Above"
    ,answer:"a"
},

{
    prompt: "What is JQuery? \n(a) A software consulting service\n(b) An open source API based on JavaScript\n(c) An Open Source API based on CSS\n(d) None of the Above"
    ,answer:"b"
},

{
    prompt: "What is Bootstrap? \n(a) A software consulting service\n(b) An open source API based on JavaScript\n(c) An Open Source API based on CSS\n(d) None of the Above"
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
        quizStarted = true;
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
    if (i === questions.length-1) {
        clearInterval(startTimer);
    }
  }, 1000);

        return false
            };
        };


//MAIN QUIZ FUNCTION

var quizTaking = function() {
if (i < questions.length && currentScore > 0 && quizStarted) {
// get the id of the button click
var btnID = event.target.getAttribute("id");

var questionAnswer = questions[i].answer;

   if (btnID === questionAnswer) {
        currentScore = currentScore + 10;  
        scoreEl.textContent = currentScore;
        i++;
    };
    if (btnID !== questionAnswer) {
        currentScore = currentScore - 10;
        scoreEl.textContent = currentScore;
        i++;
    };
    if (currentScore < 0) {
        window.prompt("Sorry - you're out of time! Hit refresh to try again.")
    };
    //i++;
    
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
    return false
}


//MASTER FUNCTION:

var mainFunction = function() {
    var btnID = event.target.getAttribute("id");
    if (!quizStarted) {
        quizStart();
    }
    else if (i === questions.length-1) {
       quizOver();
    }
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