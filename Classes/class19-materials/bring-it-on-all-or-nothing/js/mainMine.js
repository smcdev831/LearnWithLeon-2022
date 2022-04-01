// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let vari = true

if (vari == true) {
  alert("This is true")
} else {
  alert("This is false")
}

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = "Hot Pink"
console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function sum3Divide4(n1, n2, n3, n4) {
  result = ((n1 + n2 + n3 ) / n4 )
  console.log(result);
}

sum3Divide4(1, 2, 3, 4)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function numToPower (n1, n2) {
  console.log(n1 ^^ n2);
}

numToPower(3, 5)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number


function fizzBuzz(n1) {
  if (n1 % 15 == 0) {
    console.log(FizzBuzz);
  } else if (n1 % 5 == 0) {
    console.log(Buzz);
  } else if (n1 % 3 == 0) {
    console.log(Fizz);
  }
}
