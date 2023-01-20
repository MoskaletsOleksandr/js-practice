// const value = 27.9;

// const ceil = Math.ceil(value);
// const floor = Math.floor(value);
// const round = Math.round(value);

// console.log(ceil, floor, round)

// const companyName = "Cyberdyne Systems";

// const repairBots = 150;

// const defenceBots = 50;

// const sentence = `${companyName} has ${repairBots + defenceBots} in stock`

// console.log(sentence)

// let a = 5;
// let b = 3;

// let c;

// function sum(a, b){
//     const c = a + b;
//     console.log(c)
// }

// sum(a, b)

// a = 40;
// b = 300;

// sum(a, b)

// function myFn(a, b) {
//     let c;
//     a += 1;
//     c = a + b;
//     return c;
// }

// console.log(myFn(120, 40))

// function printMyName() {
//     console.log(`Alex`)
// }

// setTimeout(printMyName, 1000)

// let a;
// let b;

// function myFn() {
//     let b;
//     a = true;
//     b = 10;
//     console.log(b);
// }

// myFn();

// console.log(a);
// console.log(b)

// const deadline = Number(prompt("Write deadline"));

// switch (deadline) {
//     case 0: {
//         console.log(`today`);
//         break;
//     }

//     case 1: {
//         console.log(`tomorrow`);
//         break;
//     }

//     default: {
//         console.log("have a rest");
//         break;
//     }
// }
// let sum = 0;

// for (let num = 1; num <= 10; num += 1) {
//     console.log(num);
//     sum += num;
// }

// console.log(sum);

// const min = 21;

// const max = 1000;

// for (let iteration = min; iteration <= max; iteration += 1) {
//     if (iteration % 50 !== 0) {
//         console.log(iteration);
//     }
// }

// const from = 1;

// const to = 20;

// let count = 0;

// for (let i = from; i < to; i += 1) {
//     if (i % 7 ===0) {
//         count += 1;
//     }
// }

// console.log(count);

// const color = prompt(`Write your color`)

// switch (color) {
//     case "red":
//         alert("STOP!!!")
//         break;

//     case "green":
//         alert("GO!")
//         break;

//     case "yellow":
//         alert("Wait a little!")
//         break;

//     default:
//         break;
// }
// const number = Number(prompt(`Write your number`));

// // while (number < 100) {
// //     number = Number(prompt("Write your number bigger than 100"));
// // }

// let a = 3;
// let b = ` join`;
// console.log(a + b)

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// friends[1] = "qweqwer";

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// let a = [1, 2, 3];
// let b = a;

// console.log(a);
// console.log(b);

// a[1] = 10;

// console.log(a);
// console.log(b);

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += "-1";
// }

// for (const friend of friends) {
//   console.log(friend);
// }
// console.table(friends);

// const cart = [54, 48, 39, 106, 70, 500, 379];
// let total = 0;

// // for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);

// //   total += cart[i];
// // }

// for (const value of cart) {
//   total += value;
// }

// console.log(total);

// const numbers = [54, 48, 39, 106, 70, 500, 379];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   if (numbers[i] % 2 === 0) {
//     console.log("Needed");

//     total += numbers[i];
//   }
// }

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log("Total ", total);

// let logins = ['wervasvd', 'wfervsdvs', 'fewrfa', '0ikperjo5'];
// const loginToFind = 'wfervsdvs';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = 'User  is found';
//     break;
//   }

//   message = 'User ${loginToFind} is not found';
// }

// console.log(message);

// const message = logins.includes(loginToFind)
//   ? `User ${loginToFind} is found`
//   : `User ${loginToFind} is not found`;

// console.log(message);

// const numbers = [51, 45, 3, 4, 85, 95, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (smallestNumber > number) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);
//   // if (letter === letter.toLowerCase()) {
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   // }

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// invertedString = console.log(invertedString);

// const title = 'sdf sgvfv 10 srgsfv sgdsd';

// const normalizedTitle = title.toLowerCase().split(' ').join('-');

// console.log(normalizedTitle);

// const string = 'ruifdvhk oerdiflj ofrivjf rrsv';

// console.log(string);

// let newString = '';

// // const array = string.split(' ');

// // console.log(array);

// // array.reverse();

// // console.log(array);

// for (let index = 0; index < string.length; index += 1) {
//   newString = string[index] + newString;
// }

// console.log(newString);

// const numbers = [100, 42, 58, 85, 865, 4];

// let minNumber = Infinity;

// for (let number of numbers) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }

// console.log(minNumber);

// const fn = function (value) {
//   if (value > 50) {
//     return 'Більше 50';
//   }
//   return 'Менше 50';
// };

// console.log(fn(400));

// const fnA = function () {
//   console.log('funA is done');
// };

// const fnB = function () {
//   console.log('funB is done');

//   console.log(value);
// };
// const fnC = function () {
//   console.log('funC is done');
// };

// fnA();

// fnB();

// fnC();

// const cart = [54, 54, 58, 2, 4, 835, 685, 865, 3];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('total: ', total);

// const calculateTotalPrise = function (items) {
//   console.log('items inside fun: ', items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log('total: ', calculateTotalPrise([5, 5, 8, 4, 7]));
// console.log(calculateTotalPrise([846, 4761, 'wrsgs', 94651, 946]));
// console.log(calculateTotalPrise([57547, 894 - 65, 9476, 46]));

// const logins = ['tkbknrgdf', 'get', 'ewtrbgsf', 'gwtrbsd'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `User ${loginToFind} is found`
//     : `User ${loginToFind} is not found`;
// };
// console.log(findLogin(logins, 'refvxvsdv'));
// console.log(findLogin(logins, 'ewtrbgsf'));
// console.log(findLogin(logins, 'refvxvsdv'));
// console.log(findLogin(logins, 'get'));

// const changeCase = function (string) {
//   const letters = string.split('');

//   let inversedString = '';

//   for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();

//     inversedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
//   }

//   return inversedString;
// };

// console.log(changeCase('rfergGERDVved'));
// console.log(changeCase('FDVrdgdfDDFBrdgfb'));
// console.log(changeCase('grfdFddggdfgdfgBdBfd'));
// console.log(changeCase('FDGDFbdfbdfbDFBDFbdfbfd'));

const filterNumbers = function (array, ...args) {
  console.log('array: ', array);
  console.log('args: ', args);
  const uniqueNumber = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueNumber.push(element);
    }
  }

  return uniqueNumber;
};

console.log(filterNumbers([5, 5, 7, 3], 10, 8, 7, 3));
console.log(filterNumbers([7, 2, 1, 9], 8, 9, 2, 7));
console.log(filterNumbers([7, 10, 144, 155], 155, 7, 114, 5));
