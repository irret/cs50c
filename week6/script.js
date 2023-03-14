/* Students: Please use this week's project for Week 6: Assignment 6: Enhanced User Interfaces. 
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

$( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
        let userChoice = ui.draggable.data('choice');
        checkAnswer(userChoice);
      }
    });

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
  for(let index in questionsArray[turn].answersArray){
    let button = $('<h2 class="ui-widget-content">');
    button.text(questionsArray[turn].answersArray[index]);
    
    $(button).css({'display': 'inline-block','margin': '10px', 'padding': '10px' });

    button.data('choice', index);
    $('#answers').append(button);
    button.draggable();
  }
}


function checkAnswer(userChoice) {
  
  let correctChoice = questionsArray[turn].correctAnswer;
    if (userChoice == correctChoice) {
          $('#correct').text("Correct!");
          $( "#correct" ).dialog();
          score++;
          showScore();
          nextQuestion();
        
    } else {
            $( "#incorrect" ).text("Incorrect! Try again.");
          $( "#incorrect" ).dialog();
    }
  
}

//show turn function
function showTurn(){
  $('#counter').text("Question # " + (turn + 1));
  $( "#progressbar" ).progressbar({
    value: turn +1 ,
    max:7
});
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
