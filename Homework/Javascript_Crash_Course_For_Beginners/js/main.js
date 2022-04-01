console.log('Hello world');
console.error('This is an error');
console.warn('This is a warning');

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

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof rating); //number
console.log(typeof isCool); //boolean
console.log(typeof x); //actually null, fake news
console.log(typeof y); //undefined
console.log(z); //undefined

//concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template string
console.log(`My name is ${name} and I am ${age}`);

const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); //start and stop parameters
console.log(s.split(''));

const fruits = ['apples', 'oranges', 'pears']
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main Street',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: {city}} = person;

console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';

console.log(person);
