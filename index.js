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

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueNumber = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueNumber.push(element);
//     }
//   }

//   return uniqueNumber;
// };

// console.log(filterNumbers([5, 5, 7, 3], 10, 8, 7, 3));
// console.log(filterNumbers([7, 2, 1, 9], 8, 9, 2, 7));
// console.log(filterNumbers([7, 10, 144, 155], 155, 7, 114, 5));

// function getSum() {
//   let sum;

//   for (number of arguments) {
//   }
//   console.log(arguments);
// }

// getSum(541, 46851, 461, 41, 5);

// const town = 'Кременчук';
// const name = 'Олександр';
// const age = '24';

// console.log(`Мене звуть ${name}, мені ${age} років і я з мітса ${town}`);

// console.log('Мене звуть' + ' ' + name + 'я');

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   } else if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }
// console.log(checkStorage(0, 10));

// function getExtremeElements(array) {
//   // Change code below this line
//   array.splice(1, array.length - 2);

//   return array;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const wordsAmount = message.split(' ').length;

//   const totalSum = wordsAmount * pricePerWord;

//   return totalSum;
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);

// function slugify(title) {
//   // Change code below this line
//   let writtenInLowerCase = title.toLowerCase();
//   let array = writtenInLowerCase.split(' ');
//   let slugTitle = array.join('-');

//   console.log(slugTitle);
//   // Change code above this line
// }

// slugify('Ten secrets of JavaScript');

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає["Mango", "Poly", "Ajax"]

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   // 1. Об'єднати два масиви.
//   // 2. Якщо довжина більша, ніж максимальна, обрізати

//   let newArray = firstArray.concat(secondArray);

//   let newArrayLength = newArray.length;

//   let finalArray;
//   finalArray = newArray.slice(0, maxLength);
//   //   if (newArrayLength > maxLength) {
//   //     finalArray = newArray.slice(0, maxLength);
//   //   } else {
//   //     finalArray = newArray;
//   //   }

//   console.log(finalArray);
//   // Change code above this line
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 5);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);

// function calculateTotal(number) {
//   // Change code below this line
//   let totalSum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     totalSum += i;
//   }

//   console.log(totalSum);
//   // Change code above this line
// }

// calculateTotal(5);

// function findLongestWord(string) {
//   let array = string.split(' ');

//   let longestWord = '';

//   for (const word of array) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   // console.log(array);

//   // console.log(longestWord.length);

//   // return longestWord;
//   console.log(longestWord);
// }

// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
// findLongestWord(
//   'regdhlidfk rgbfv rgsufkhvjn reghfvfs rekghdsf rgshdfnv wkesfhskdhskhglkgh'
// );
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(29, 34);
// createArrayOfNumbers(2, 10000);

// function filterArray(numbers, value) {
//   let newArray = [];
//   for (let number of numbers) {
//     console.log(number);
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   console.log(numbers);
//   console.log(newArray);
// }

// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([1, 2, 3, 4, 5], 5);

// function getCommonElements(array1, array2) {
//   let commonArray = [];

//   console.log(array1);
//   console.log(array2);

//   for (const number of array1) {
//     console.log(number);

//     if (array2.includes(number)) {
//       commonArray.push(number);
//     }
//   }

//   console.log(commonArray);

//   return commonArray;
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let array = [];

//   for (i = start; i <= end; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//       array.push(i);
//     }
//     console.log(array);
//     // Change code above this line
//   }

//   return array;
// }
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);
// function includes(array, value) {
//   let boul = false;
//   for (const item of array) {
//     if (item === value) {
//       boul = true;
//     }
//   }
//   console.log(boul);
// }
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
// includes([1, 2, 3, 4, 5], 17);
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');

// ЗАДАЧА 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ
// "Wow, you  have a REALLY long name!", ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// function checkName(name) {
//   if (name.length >= 7) {
//     console.log('Wow, you  have a REALLY long name!');
//   } else {
//     console.log("Your name isn't very long");
//   }
// }

// checkName('fsimvefdmvpevm');
// checkName('wfsdv');

// function checkName(name) {
//   if (name.length >= 7) {
//     return 'Wow, you  have a REALLY long name!';
//   }

//   return "Your name isn't very long";
// }

// console.log(checkName('wfvs'));
// console.log(checkName('fsimvefdmvpevm'));

// ЗАДАЧА 11
// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const answer = prompt('Какое официальное название JavaScript?');

// if (answer === 'ECMAScript') {
//   console.log('Верно!');
// } else {
//   console.log('Не знаете? ECMAScript!');
// }

// ЗАДАЧА 12
// Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const numberOfMinutes = Number(prompt('Write your number of minutes'));

// let hours = '00';
// let rest = '00';

// if (numberOfMinutes < 10) {
//   rest = `0${numberOfMinutes}`;
// } else if (numberOfMinutes < 60) {
//   rest = numberOfMinutes;
// } else {
//   rest = numberOfMinutes % 60;
//   if (rest < 10) {
//     rest = '0' + rest;
//   }

//   hours = (numberOfMinutes - rest) / 60;
//   if (hours < 10) {
//     hours = '0' + hours;
//   }
// }

// let result = `${numberOfMinutes} === ${hours}:${rest}`;
// console.log(result);

// ЗАДАЧА 13
//При помощи цикла for додайте все четные числа от   min до max

// function checkNumber(min, max) {
//   let array = [];

//   for (i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//       console.log(i);
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(checkNumber(1, 5));
// console.log(checkNumber(3, 3));

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let array = [];

//   for (i = start; i <= end; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//       array.push(i);
//     }
//     console.log(array);
//     // Change code above this line
//   }

//   return array;
// }
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// ЗАДАЧА 14
// Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// function checkLogin() {
//   login = prompt('Write a login');
//   if (login === 'Admin') {
//     // const password = prompt('Write password');
//     checkPassword() {
//       password = prompt('Write password');
//       if (password === 'main') {
//         console.log('Welcome!')
//       }
//     }
//   } else if (login === '') {
//     console.log('Canceled');
//   } else {
//     console.log('I dont know who you are');
//   }
// }

// checkLogin();

// const userLogin = prompt('Write a login');
// const login = 'Admin';

// if (userLogin === login) {
//   console.log('Welcome!');
// } else if (userLogin === '') {
//   console.log('Canceled');
// } else {
//   console.log('I dont know who you are');
// }

// const userPassword = prompt('Write password');
// const password = 'main';

// if (userPassword === password) {
//   console.log('Welcome!');
// } else {
//   console.log('Password is wrong');
// }

// const userLogin = prompt('Write a login');
// const login = 'Admin';

// if (userLogin === login) {
//   const userPassword = prompt('Write password');
//   const password = 'main';

//   if (userPassword === password) {
//     console.log('Welcome!');
//   } else {
//     console.log('Password is wrong');
//   }
// } else if (userLogin === '' || userLogin === null) {
//   console.log('Canceled');
// } else {
//   console.log('I dont know who you are');
// }

// ЗАДАЧА 15
// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let figure = 0;
// let total = 0;

// do {
//   figure = prompt('Write your number');
//   total += Number(figure);
// } while (figure !== null);

// alert(`Общая сумма введенных чисел равна: ${total}`);

// ЗАДАЧА 16-17
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }

// const min = getRandomInt(0, 60);

// console.log(min);

// if (min <= 15) {
//   console.log('Число знаходиться в першій четверті години');
// } else if (min <= 30) {
//   console.log('Число знаходиться в другій четверті години');
// } else if (min <= 45) {
//   console.log('Число знаходиться в третій четверті години');
// } else {
//   console.log('Число знаходиться в четвертій четверті години');
// }

// ЗАДАЧА 18

// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// function checkFirstLetter(string) {
//   if (string.indexOf('a') === 0) {
//     return 'Yes';
//   }
//   return 'No';
// }

// console.log(checkFirstLetter('sfdhasl'));
// console.log(checkFirstLetter('abcde'));
// console.log(checkFirstLetter('aj'));
