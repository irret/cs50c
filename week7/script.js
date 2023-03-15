/* Students: Please use this week's project for Week 7: Assignment 7: jQuery Plugin Promotional Site. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
"use strict";
let person = prompt("What's your name?");

if (person != null) {
   document.getElementById("hello").innerHTML += " " + person + "!";
}