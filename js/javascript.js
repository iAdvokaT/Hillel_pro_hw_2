'use strict';

alert('Hello my friend!');

// Отримуємо три рядки від користувача
let firstQuestion = prompt("Введіть перший рядок:");
let twoQuestion = prompt("Введіть другий рядок:");
let threeQuestion = prompt("Введіть третій рядок:");

// Зберігаємо рядки у масиві
let questions = [firstQuestion, twoQuestion, threeQuestion];

// Виводимо їх у довільному порядку однією командою
console.log(`${questions[2]}, ${questions[0]}, ${questions[1]}`);

// let userName = 'Alexander';
// console.log(userName);
// console.log(typeof userName);

// let userAge = 35;
// console.log(userAge);
// console.log(typeof userAge);

// let isStudent = true;
// console.log(isStudent);
// console.log(typeof isStudent);

// let userAddress = null;
// console.log(userAddress);
// console.log(typeof userAddress);

// let userHobby;
// console.log(userHobby);
// console.log(typeof userHobby);

// let result = prompt('Enter your name');
// console.log(result);

// result = confirm('Are you sure you want to be a happy?');
// console.log(result);

// console.log(typeof 42);
// console.log(typeof 'Hello world!');