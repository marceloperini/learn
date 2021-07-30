// import subtract, { square, add } from './utils';

// console.log('app.js is running...');
// console.log(square(4));
// console.log(add(1, 2));
// console.log(subtract(100, 81))

import isSenior, { isAdult, canDrink } from "./person";

console.log('Does 18 age is adult? ', isAdult(18));
console.log('Does 10 age is adult? ', isAdult(10));

console.log('Does 18 age can drink? ', canDrink(18))
console.log('Does 10 age can drink? ', canDrink(10))

console.log('Does 65 a senior age? ', isSenior(65));