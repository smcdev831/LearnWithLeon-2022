// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let question = "Is this a question?"

if (question.endsWith("?")) {
  alert("This is a question!")
} else {
  alert("This is not a question!")
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let wordPlay = "jr. dev, developer, frontend, backend, engineer"

console.log(wordPlay.replace("jr. dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissorsShoot() {
  randomizer = Math.random()
  if (randomizer < .33) {
    console.log("Rock");
  } else if (randomizer < .66) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

rockPaperScissorsShoot()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
