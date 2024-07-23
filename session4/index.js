// --- Değişken Tanımlama ---

// ES5'te var ile değişken tanımlama
// var name = "Bedirhan";
// var age = 25;
// var city = "İstanbul";

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);

// // var ile tanımlanan değişkenin kapsamı
// function es5VarScope() {
//   var isAdult = true;
//   if (isAdult) {
//     var message = "You are an adult";
//     console.log(message);
//   }
//   console.log(message);
// }
// es5VarScope();

// ---------------------------------------

// ES6 da let ve const ile değişken tanımlama
let name = "Bedirhan";
const age = 25;
let city = "İstanbul";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// let ve const ile tanımlanan değişkenlerin kapsamı
function es6LetConstScope() {
  let isAdult = true;
  if (isAdult) {
    let message = "You are an adult";
    console.log(message);
  }
  //   console.log(message); message is not defined
}
es6LetConstScope();

// --- Fonksiyon Tanımlama ---

// // ES5'te fonksiyon tanımlama
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Ece"));
// console.log(greet("Damla"));

// // ES5'te anonim fonksiyon
// var sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(3, 4));

// ---------------------------------------

// ES6'da arrow function ile fonksiyon tanımlama
const greet = name => `Hello, ${name}!`;
console.log(greet("Ece"));
console.log(greet("Damla"));

// ES6'da arrow function ile anonim fonksiyon
const sum = (a, b) => a + b;
console.log(sum(3, 4));

// ES6'da arrow function ile this bağlamı
function Person(name) {
  this.name = name;
  setTimeout(() => {
    console.log("Hello, " + this.name);
  }, 0);
}
const person = new Person("Ece");

// --- Dizi Elemanlarını Değişkenlere Atama (Destructuring) ---

// ES5'te diziden elemanları alma
// var numbers = [1, 8, 7];
// var first = numbers[0];
// var second = numbers[1];
// var third = numbers[2];

// console.log("First:", first);
// console.log("Second:", second);
// console.log("Third:", third);

// // Dizi elemanlarının değişimini gösterme
// numbers[0] = 2;
// console.log("First (updated):", first);

// ---------------------------------------

// ES6'da destructuring ile diziden elemanları alma
let numbers = [1, 8, 7];
let [first, second, third] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// Dizi elemanlarının değişimini gösterme
numbers[0] = 2;
[first, second] = numbers;
console.log("First (updated):", first);

// --- Nesne Elemanlarını Değişkenlere Atama (Destructuring) ---

// // ES5'te nesneden elemanları alma
// var person2 = { name: "Berra", age: 25 };
// var name2 = person2.name;
// var age2 = person2.age;

// console.log("Name:", name2);
// console.log("Age:", age2);

// // Nesne elemanlarının değişimini gösterme
// person2.name = "Yağmur";
// console.log("Name (updated):", name2);

// ---------------------------------------

// ES6'da destructuring ile nesneden elemanları alma
let person2 = { name2: "Berra", age2: 25 };
let { name2, age2 } = person2;

console.log("Name:", name2);
console.log("Age:", age2);

// Nesne elemanlarının değişimini gösterme
person2.name2 = "Yağmur";
({ name2, age2 } = person2);
console.log("Name (updated):", name2);

// --- Template Literals ---

// // ES5'te string birleştirme
// var name3 = "Ulaş";
// var greeting = "Hello, " + name3 + "!";
// console.log(greeting);

// // Çok satırlı stringler
// var message = "This is line 1.\nThis is line 2.";
// console.log(message);

// ---------------------------------------

// ES6'da template literals kullanımı
let name3 = "Ulaş";
let greeting = `Hello, ${name3}!`;
console.log(greeting);

// Çok satırlı stringler
let message = `This is line 1.
This is line 2.`;
console.log(message);

// --- Default Parametre Değerleri ---

// ES5'te default parametre değerleri
// function multiply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }

// console.log(multiply(2));
// console.log(multiply(2, 4));
// console.log(multiply(2, 0));

// // ES5'te null değeri kontrolü
// function sayHello(name4) {
//   name4 = name4 || "Guest";
//   return "Hello, " + name4 + "!";
// }
// console.log(sayHello());
// console.log(sayHello("Zeynep"));

// ---------------------------------------

// ES6'da default parametre değerleri
const multiply = (a, b = 1) => a * b;
console.log(multiply(2));
console.log(multiply(2, 4));
console.log(multiply(2, 0));

// ES6'da null değeri kontrolü
const sayHello = (name4 = "Guest") => `Hello, ${name4}!`;
console.log(sayHello());
console.log(sayHello("Zeynep"));

// --- Spread ve Rest Operatörleri ---

// // ES5'te dizi kopyalama ve birleştirme
// var arr1 = [1, 6, 8];
// var arr2 = [2, 4, 7];
// var combined = arr1.concat(arr2);
// console.log(combined);

// // Diziyi klonlama
// var clonedArr = arr1.slice();
// console.log(clonedArr);

// // ES5'te rest parametreleri
// function sum2() {
//   var args = Array.prototype.slice.call(arguments);
//   return args.reduce(function (acc, curr) {
//     return acc + curr;
//   }, 0);
// }
// console.log(sum2(1, 5, 2, 4));

// ---------------------------------------

// ES6'da spread operator ile dizi kopyalama ve birleştirme
let arr1 = [1, 6, 8];
let arr2 = [2, 4, 7];
let combined = arr1.concat(arr2);
console.log(combined);

// Diziyi klonlama
let clonedArr = [...arr1];
console.log(clonedArr);

// ES6'da rest parametreleri
const sum2 = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum2(1, 5, 2, 4));

// Nesne için spread operator
let obj1 = { name: "Aziz", age: 25 };
let obj2 = { city: "İstanbul", country: "Türkiye" };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// --- Classes ---

// ES5'te class tanımlama
// function Person5(name5, age5) {
//   this.name5 = name5;
//   this.age5 = age5;
// }

// Person5.prototype.greet = function () {
//   return (
//     "Hello, my name is " + this.name5 + " and I am " + this.age5 + " years old."
//   );
// };

// var person5 = new Person5("Bedirhan", 25);
// console.log(person5.greet);

// ---------------------------------------

// ES6'da class tanımlama

// class Person5 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// const person5 = new Person("Bedirhan, 25");
// console.log(person5.greet());

// --- Promises ---

// ES5'te callback kullanımı
// function fetchData(callback) {
//   setTimeout(function () {
//     callback("Data fetched");
//   }, 0);
// }

// fetchData(function (data) {
//   console.log(data);
// });

// ---------------------------------------

// ES6'da Promise kullanımı
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 0);
  });
};

fetchData().then(data => {
  console.log(data);
});

// --- Modules ---

// ES5'te modüller (CommonJS)
// var moduleA = require("./moduleA");
// var result = moduleA.someFunction();
// console.log(result);

// ---------------------------------------

// ES6'da modüller (ES6 Modules)
// moduleA.js

// export const sumeFunction = () => {
//   return "This is a function from moduleA";
// };

// // main.js
// import { someFunction } from ".moduleA.js";
// const result = someFunction();
// console.log(result);
