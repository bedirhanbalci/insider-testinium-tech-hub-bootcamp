var myName = "Bedirhan";

const mySurname = "Balcı";

console.log(mySurname);

// mySurname = "insider";

let myAge = 25;

myAge = 27;

console.log(myAge);

console.log(myName + mySurname);

console.log(myName + " " + mySurname);

console.log(`${myName} ${mySurname}`);

console.log(`My name: ${myName}
My surname: ${mySurname}`);

console.log(`My name: ${myName} My surname: ${mySurname} My age: ${myAge}`);

console.log(myName.length);

console.log(myName[0]);

console.log(myName[3]);

console.log(myName.concat(mySurname));

console.log("abc".concat("def"));

console.log(myName.replace("d", "s"));

console.log(myName);

const newName = myName.replace("d", "s");

console.log(newName);

console.log(myName);

const newText = "aaabbbccc";

console.log(newText);

console.log(newText.replace("a", "d"));

console.log(newText.replaceAll("a", "d"));

console.log(newText);

console.log(newText.split());

const newestText = "a-b-c-d-e";

console.log(newestText);

console.log(newestText.split("-"));

console.log("abcdefg".split("c"));

console.log("abcdefgh".substr(3, 3));

console.log("abcdefgh".substring(3, 6));

console.log("abcdefgh".toUpperCase());

console.log("abcdefgh".toLowerCase());

console.log("abcdefgh".slice(3, 6));

console.log("   abcdefgh   ".trim());

console.log("   abc   defgh   ".split(" ").join(""));

console.log("   abc  defgh   ".trim().replace("  ", ""));

console.log("   abc  defgh   ".replaceAll(" ", ""));

console.log("   abc   defgh   ".includes("abc"));

console.log("   abc   defgh   ".includes("ab c"));

// window.location.href;

// window.location.href.includes("/sepetim");

// if window.location.href.includes("/sepetim") {
//     console.log("Burası sepet sayfası");
// }

console.log("   abc   defgh   ".indexOf("ab c"));

console.log("   abc   defgh   ".indexOf("abc"));

console.log([1, 2, "bedirhan", true, undefined, {}, []]);

const myArray = [];

console.log(myArray.push(myAge));

console.log(myArray);

console.log(myArray.push(myName));

console.log(myArray.push(mySurname));

console.log(myArray.push(true));

console.log(myArray.push("last one"));

console.log(myArray);

const lastOne = myArray.pop();

console.log(myArray);

console.log(myArray.shift());

console.log(myArray);

console.log(myArray.unshift("new one"));

console.log(myArray);

const concatArray = myArray.concat([1, 2, 7, 7]);

console.log(concatArray);

const concatString = concatArray.join();

console.log(concatArray.join("-"));

console.log(concatString.split("-"));

console.log(concatArray);

console.log(concatArray.indexOf(2));

console.log(concatArray.includes("Balcı"));

console.log(concatArray.slice(2));

console.log(concatArray.slice(3, 5));

console.log(
  [10, 20, 22, 31, 52].find(function (item) {
    return item % 2 === 0;
  })
);

console.log([10, 20, 22, 31, 52].findIndex(item => item % 2 === 0));

[10, 20, 22, 31, 52].forEach(item => console.log(item));

[10, 20, 22, 31, 52].map(item => console.log(item * 2));

[10, 20, 22, 31, 52].filter(item => console.log(item % 2 === 0));

const reduceArray = [10, 20, 22, 31, 52].reduce((total, item) => {
  return total + item;
});

console.log(reduceArray);

[10, 20, 22, 31, 52].every(item => console.log(item > 20));

const everyArray = ["a", "b", "ab"].every(item => item.includes("a"));

console.log(everyArray);

const someArray = ["a", "b", "ab"].some(item => item.includes("a"));

console.log(someArray);

const lengthArray = ["a", "b", "ab"].some(item => item.length > 1);

console.log(lengthArray);

const reverseArray = ["a", "b", "ab"].reverse();

console.log(reverseArray);

const myCat = {
  name: "Boncuk",
  age: 3,
  foot: 4,
  tail: 1,
};

console.log(myCat.name);

console.log(myCat["name"]);

myCat["name"] = "Pamuk";

myCat["surname"] = "Balcı";

console.log(myCat);

delete myCat.name;

console.log(myCat);

console.log(Object.keys(myCat));

console.log(Object.values(myCat));

console.log(Object.entries(myCat));

const pokemon = {
  name: "Pikachu",
  skills: {
    electric: ["thunderbolt", "shock wave"],
    normal: ["pound", "quick attack"],
  },
};

Object.values(pokemon.skills).forEach(item => {
  console.log(item);
});

const skills = [];
Object.values(pokemon.skills).forEach(array => {
  array.forEach(skill => {
    skills.push(skill);
  });
});

console.log(skills);

function myFunction() {
  console.log("This is my function");
}

console.log(myFunction());

function multiplyFunction(numberOne, numberTwo) {
  numberOne * numberTwo;
}

console.log(multiplyFunction(4, 5));

let number = 0;
function multiplyFunction2(numberOne, numberTwo) {
  number = numberOne * numberTwo;
}

console.log(multiplyFunction2(2, 10));
console.log(number);

function multiplyFunction3(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

console.log(multiplyFunction3(8, 5));

const number2 = 10;
function myNewFunction() {
  const number3 = 20;
  console.log(number2);
  console.log(number3);
}

myNewFunction();

console.log(number2);
// console.log(number3);

try {
  const number2 = 10;
  function myNewFunction() {
    const number3 = 20;
    console.log(number2);
    console.log(number3);
  }

  myNewFunction();

  console.log(number2);
  console.log(number3);
} catch (error) {
  console.log(`An error occurred: ${error}`);
}

// function specifyPage() {
//   const object = {
//     cart: "Cart Page",
//     search: "Search Page",
//     other: "Other Page",
//   };

//   if (window.location.href.includes("/sepetim")) {
//     return object.cart;
//   } else if (window.location.href.includes("/arama?")) {
//     return object.search;
//   }
//   return object.other;
// }

// specifyPage();
