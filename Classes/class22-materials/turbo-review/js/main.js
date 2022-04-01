// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = " Diet Vanilla Coke from Friendlys "
favDrink = favDrink.trim()

console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let str = "Bob Duck apple dog"

console.log(str.search('apple'));
//Returns 9 which is the character index of where the word started

console.log(str.search('phone'));
//Returns -1 to indicate the word is not in the string

if (str.search('apple') !== -1) {
  console.log('yes');
} else {
  console.log('no');
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let random = Math.random()
  if (random < .3333) {
    return "Rock";
  } else if (random < .6666) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

rockPaperScissors()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
  let botChoice === rockPaperScissors()
  if (playerChoice === 'rock') {

  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
