/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
"use strict";

const questionsArray = [
  {question: "What is the hardest natural substance in the world?",
  answersArray: ["diamond", "iron", "carbon"],
   correctAnswer: 0,
  score: 1},
  {
    question: "What does a thermometer measure?",
  answersArray: ["temperature", "height", "dencity"],
    correctAnswer: 0,
  score: 1},
  {
    question: "What fruit do raisins come from?",
  answersArray: ["grapes", "figs", "oranges"],
    correctAnswer: 0,
  score: 1},
  {
    question: "How many cents are in a quarter?",
  answersArray: [25, 50, 100],
    correctAnswer: 0,
  score: 1},
  {
    question: "Where is the Eiffel Tower?",
  answersArray: ["France", "Italy", "USA"],
    correctAnswer: 0,
  score: 1},
  {
    question: "How many colors are there in a rainbow?",
  answersArray: [7, 15, 10],
    correctAnswer: 0,
  score: 1}
];

let turn = 0;
let score = 0;

$('#newGame').click(clearGame);
$('#nextQuestion').click(nextQuestion);

showQuestion();


//show question function
function showQuestion() {
  showScore();
   $('#answer').val(" ");
  let currentQuestion = questionsArray[turn].question;
  $('#question').text(currentQuestion);
  showTurn();
  showButtons();
}

function showButtons(){
  let currentAnswers = questionsArray[turn].answersArray;
  for(let i = 0; i < currentAnswers.length; i++){
    let button = $('<button>');
    let userChoice =  currentAnswers[i];
    
    button.text(userChoice);
    $('#answers').append(button);
    checkAnswer(i, button);    
  }
}

function checkAnswer(i, button) {
  let correctChoice = questionsArray[turn].correctAnswer;
    if (i == correctChoice) {
      button.click(
        function() {
          $('#message').text("Correct!");
          score++;
          showScore();
          nextQuestion();
          }
        );
    } else {
      button.click(
        function() {
            $('#message').text("Incorrect! Try again.");
        }
      );
    }
}

//show turn function
function showTurn(){
  $('#counter').text("Question # " + (turn + 1));
}

function nextQuestion() {
  showScore();
  $('#answers').text(' ');
  turn++;
  if (turn < questionsArray.length) {
    showQuestion();
  }else{
    $('body').text('You answered all the questions!');
  }

}

function showScore() {
  $('#score').text("Score: " + score);
}

function clearGame() {
  turn = 0;
  score = 0;
  showTurn();
  showScore();
  $('#message').text(" ");
  $('#answers').text(' ');
  showQuestion();
}
