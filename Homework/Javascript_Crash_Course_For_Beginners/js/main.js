console.log("Hello world");
console.error("This is an error");
console.warn("This is a warning");

//var, let, const -- let's not const use variables
// String, Numbers, Boolean, null, undefined

// let age = 30;
// age = 31;
//
// console.log(age);

// const age = 30;
// age = 31;
//
// console.log(age);

let name = "John";
let age = 30;
let rating = 4.5;
let isCool = true;
let x = null;
let y = undefined;
let z;

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof rating); //number
console.log(typeof isCool); //boolean
console.log(typeof x); //actually null, fake news
console.log(typeof y); //undefined
console.log(z); //undefined

//concatenation
console.log("My name is " + name + " and I am " + age);
//Template string
console.log(`My name is ${name} and I am ${age}`);

let s = "Hello World!";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); //start and stop parameters
console.log(s.split(""));

let fruits = ["apples", "oranges", "pears"];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = "grapes";
fruits.push("mangos");
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main Street",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(firstName);
console.log(city);

person.email = "john@gmail.com";

console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

//for loops

for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number ${i}`);
}

//while loops

let i = 0;

while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo.text);
}

//ForEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

let todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);

todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

//conditionals

x = 9;
y = 11;
if (x === 10) {
  console.log("X is 10");
} else if (x > 5 && y > 10) {
  console.log("X is more than 5, and y is more than 10");
} else if (x > 5 || y > 10) {
  console.log("X is more than 5, or y is more than 10");
} else {
  console.log("X is less than 10");
}

let color = x > 10 ? "red" : "green";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red nor blue");
    break;
}

function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
addNums(5, 4);
addNums();
console.log(addNums(5, 5));

let addNums1 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums1(5, 5));

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

//instantiate an object

let person1 = new Person("John", "Doe", "4-3-1980");
let person2 = new Person("Mary", "Smith", "3-6-1970");
console.log(person1);
console.log(person2.firstName);

console.log(person1.getBirthYear());
console.log(person1.getFullName());
