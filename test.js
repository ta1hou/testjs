// Первое

let a = 1;
let b = 1;

function sum(){
    return a+b
}
console.log(sum())

// Второе
let num = [1,2,3,4,5,6,7]


function avg(){
   const sum = num.reduce((acc, num) => acc + num, 0);
   return sum / num.length;
}

console.log(avg())

// Третье

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello world"));

// Четвертое 

function numbervstepen(number, stepen) {
  return Math.pow(number, stepen);
}

console.log(numbervstepen(2, 3));

// Пятое

function doubleArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArray(numbers);

console.log(doubledNumbers);

// Шестое 

function filterAdults(people) {
  let adults = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      adults.push(people[i]);
    }
  }

  return adults;
}

let people = [
  { name: "John", age: 25 },
  { name: "Mary", age: 17 },
  { name: "Bob", age: 21 },
  { name: "Jane", age: 16 },
  { name: "Tom", age: 32 }
];

let adults = filterAdults(people);

console.log(adults);

// Седьмое 

function filterDivisibleByThree(arr) {
  return arr.filter(num => num % 3 === 0);
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArr = filterDivisibleByThree(arr);
console.log(filteredArr);