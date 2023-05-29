for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//FizBuzz
if (num / 15 === 0) {
  return "Fizz-Buzz";
} else if (num / 5 === 0) {
  return "Buzz";
} else if (num / 3 === 0) {
  return "Fizz";
} else {
  return num;
}
