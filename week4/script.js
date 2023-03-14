/* Students: Please use this week's project for Week 4: Assignment 4: Events + Objects. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
"use strict";

const questions = ["What is the hardest natural substance in the world?", "What does a thermometer measure?", "What fruit do raisins come from?", "How many cents are in a quarter?", "Where is the Eiffel Tower?", "How many colors are there in a rainbow?"];
const answers = ["diamond", "temperature", "grapes", "25", "france", "7"];

let turn = 0;
let score = 0;


document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('newGame').addEventListener('click', clearGame);

showQuestion();
showScore();

function checkAnswer() {
  if (document.getElementById('answer').value === answers[turn]) {
    document.getElementById('message').innerHTML = "Correct!";
    score++;
    nextQuestion();
  } else {
    document.getElementById('message').innerHTML = "Wrong!";
  }
document.getElementById('answer').value='';
}

function showQuestion() {
  document.getElementById('question').innerHTML = questions[turn];
  showTurn();
}

function showTurn(){
  document.getElementById('counter').innerHTML = "Question # " + (turn + 1);
}

function nextQuestion() { 
  showScore();
  turn++;
  if (turn < questions.length) {
    showQuestion();
  } else {
    window.alert('End of Quiz');
    //clearGame();
  }

}

function showScore() {
  document.getElementById('score').innerHTML = "Score: " + score;
}

function clearGame() {
  turn = 0;
  score = 0;
  showTurn();
  showScore();
  document.getElementById('message').innerHTML = " ";
  showQuestion();
}
