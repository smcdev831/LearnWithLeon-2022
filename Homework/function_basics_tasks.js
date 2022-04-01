function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

//there is no difference between the functions//

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

//Rewrite it, to perform the same, but without if, in a single line.
//Make two variants of checkAge:
//Using a question mark operator ?
//Using OR ||

//function checkAge(age) {
//  return (age > 18) ? true : confirm('Did parents allow you?');
//}

//function checkAge(age) {
//  return (age > 18) || confirm('Did parents allow you?');
//}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//Write a function min(a,b) which returns the least of two numbers a and b.

//function min(a, b) {
//  if a > b {
//  return a;
//  } else {
//    return b;
//  }
//}

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

//function pow(x, n) {
//  let result = x;

//  for (let i = 1; i < n; i++) {
//    result *= x;
//  }

//  return result;
//}

//let x = prompt("x?", '');
//let n = prompt("n?", '');

//if (n < 1) {
//  alert(`Power ${n} is not supported, use a positive integer`);
//} else {
//  alert( pow(x, n) );
//}
