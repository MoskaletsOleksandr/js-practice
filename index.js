// import products from './products.js';

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

// const playlists = {
//   name: 'My super playlist',
//   rating: 5,
//   tracks: ['sgf', 'dgffd', 'dgfdf'],
//   trackCount: 3,
// };

// console.log(playlists.tracks);
// console.log(playlists.name);
// console.log(playlists.trackCount);

// const userName = 'Dghj';
// const mail = 'dfgh.com';

// const signUpData = {
//   userName,
//   mail,
// };

// console.log(signUpData);

// signUpData.c = 100;
// console.log(signUpData );

// const playlists = {
//   name: 'My super playlist',
//   rating: 5,
//   tracks: ['sgf', 'dgffd', 'dgfdf'],
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playlists);

// console.log(playlists.changeName('fghj fgh hfghj'));

// console.log(playlists.addTrack('efsrd'));

// console.log(playlists.addTrack('efsrd'));
// console.log(playlists.updateRating(10));
// console.log(playlists.getTrackCount());

// console.log(playlists);

// const user = {
//   gender: 'male',
// };

// const salaries = {
//   adrii: 3000,
//   anna: 1200,
//   sofia: 2000,
// };

// function getResult(salariesObj) {
//   const arrayOfValues = Object.values(salariesObj);

//   let total = 0;

//   for (let salary of arrayOfValues) {
//     total += salary;
//   }

//   return total;
// }

// console.log(getResult(salaries));

// const feedback = [
//   { name: 'cool', price: 155, quantity: 2 },
//   { name: 'bad', price: 1510, quantity: 10 },
//   { name: 'wrong', price: 153, quantity: 71 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (let stoneObj of stones) {
//     if (stoneObj.name === stoneName) {
//       return stoneObj.price * stoneObj.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice);
// const feedback = [
//   { qwe: 5, online: false },
//   { qwe: 10, online: true },
//   { qwe: 3, online: false },
// ];

// // console.table(feedback);
// // const findMark = function (reviews, mark) {
// //   for (const review of reviews) {
// //     console.log(review);

// //     if (review.qwe === mark) {
// //       return 'Done';
// //     }
// //   }
// //   return 'Fail';
// // };

// // console.log(findMark(feedback, 10));
// // console.log(findMark(feedback, 7));

// let allMarks = [];

// for (const review of feedback) {
//   console.log(review);

//   allMarks.push(review.qwe);
// }

// console.log(allMarks);

// const friends = [
//   { name: 'hkj', online: false },
//   { name: 'fgkjbh', online: true },
//   { name: 'ugybjh', online: false },
//   { name: 'pkj', online: true },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// const numbers = [1, ...[5, 7, 9], 85426, ...[8, 3, 1, 4]];

// console.log(numbers);

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// const a = { x: 5, e: 10 };
// const b = { d: 52, a: 62, e: 30 };

// const c = {
//   a: 40,
//   ...a,
//   x: 10,
//   ...b,
//   g: 5,
// };

// console.log(c);

// const playlists = {
//   name: 'My super playlist',
//   rating: 5,
//   tracks: ['sgf', 'dgffd', 'dgfdf'],
//   trackCount: 3,
//   stats: { a: 1, b: 2, c: 3 },
// };

// console.log(playlists.trackCount);

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: rvfrvf,
//   authot: nick = 'redrsd',
//   stats: { a, b, c },
// } = playlists;

// console.log(name, rating, tracks, rvfrvf, nick, a, b, c);

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (product.name === item.name) {
//         item.quantity += 1;
//         item.totalPrice += product.price;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//       totalPrice: product.price,
//     };

//     return items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let totalPrice = 0;

//     for (const { price, quantity } of items) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (productName === item.name) {
//         item.quantity += 1;
//         item.totalPrice += item.price;
//       }
//     }
//   },
//   // decreaseQuantity(productName) {
//   //   const { items } = this;

//   //   for (const item of items) {
//   //     if (productName === item.name) {
//   //       item.quantity -= 1;
//   //       item.totalPrice -= item.price;

//   //       if (item.quantity < 0) {
//   //         item.quantity = 0;
//   //         item.totalPrice = 0;
//   //       }
//   //     }
//   //   }
//   // },

//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       if (productName === items[i].name) {
//         items[i].quantity -= 1;
//         items[i].totalPrice -= items[i].price;

//         if (items[i].quantity === 0) {
//           items.splice(items[i], 1);
//         }
//       }
//     }
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: '1', price: 50 });
// cart.add({ name: '2', price: 60 });
// cart.add({ name: '3', price: 60 });
// cart.add({ name: '4', price: 110 });

// // console.table(cart.getItems());

// cart.remove('1');

// console.table(cart.getItems());

// // cart.clear();

// // console.log(cart.getItems());

// console.log('Total price: ', cart.countTotalPrice());

// cart.add({ name: '4', price: 110 });

// console.table(cart.getItems());

// console.log('Total price: ', cart.countTotalPrice());

// cart.add({ name: '4', price: 110 });
// cart.add({ name: '5', price: 110 });
// cart.add({ name: '4', price: 110 });
// cart.add({ name: '4', price: 110 });
// cart.add({ name: '4', price: 110 });

// cart.increaseQuantity('4');
// cart.decreaseQuantity('4');
// cart.decreaseQuantity('4');
// cart.decreaseQuantity('2');
// cart.decreaseQuantity('2');

// console.table(cart.getItems());

// console.log('Total price: ', cart.countTotalPrice());

// // cart.clear();

// // console.log(cart.getItems());

//  addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
// removePotion(potionName) {
//   let potionIsFound = false;

//   for (potion of this.potions) {
//     if (potion.name === potionName) {
//       const indexOfPotion = this.potions.indexOf(potion);

//       this.potions.splice(indexOfPotion, 1);
//       potionIsFound = true;
//     }
//   }

//   if (potionIsFound === false) {
//     return `Potion ${potionName} is not in inventory!`;
//   }
// },

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     let potionIsFound = false;

//     for (potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         potionIsFound = true;
//       }
//     }

//     if (potionIsFound === false) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName('sefasdafd', 'evfdfews'));
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     const { potions } = this;
//     return potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const { name } of potions) {
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     let potionIsFound = false;

//     for ({ potion } of potions) {
//       if (potion.name === potionName) {
//         const indexOfPotion = potions.indexOf(potion);

//         potions.splice(indexOfPotion, 1);
//         potionIsFound = true;
//       }
//     }

//     if (potionIsFound === false) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     let potionIsFound = false;

//     for (potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         potionIsFound = true;
//       }
//     }

//     if (potionIsFound === false) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
// };

// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// // console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Spevfded potion'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.getPotions());
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// );
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Stone skhhin', ' potion'));
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIsFound = false;

//     for (potion of this.potions) {
//       if (potion.name === potionName) {
//         const indexOfPotion = this.potions.indexOf(potion);

//         this.potions.splice(indexOfPotion, 1);
//         potionIsFound = true;
//       }
//     }

//     if (potionIsFound === false) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let potionIsFound = false;

//     for (potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         potionIsFound = true;
//       }
//     }

//     if (potionIsFound === false) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
//   // Change code above this line
// };

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 5, add);
// doMath(2, 5, function (x, y) {
//   return x - y;
// });

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('Клік по кнопці' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

// const filter = (array, callback) => {
//   let newArray = [];

//   for (const el of array) {
//     // console.log(el);
//     const passed = callback(el);

//     if (passed) {
//       newArray.push(el);
//     }
//   }

//   return newArray;
// };

// // const callback1 = (value) => value >= 3;

// const callback2 = (value) => value <= 30;

// const result1 = filter(
//   [0, 2, 3, 5, 49, 2, 4],
//   callback1((value) => value >= 3)
// );
// console.log(result1);

// const result2 = filter(
//   [865, 5, 75, 81, 52, 42, 3, 14, 59, 4, 27, 29],
//   callback2
// );
// console.log(result2);

// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     return `Шеф на ім'я ${name} приготував ${dish}`;
//   };

//   return makeDish;
// };

// const adam = makeShef('Adam');

// console.log(adam('cake'));

// const ron = makeShef('Ron');

// console.log(ron('omlette'));

// const floatingPoint = 3.94126665;

// const rounder = function (roundTo) {
//   const result = function (number) {
//     return Number(number.toFixed(roundTo));
//   };

//   return result;
// };

// const rounder2 = rounder(2);

// const rounder5 = rounder(5);
// console.log(rounder2(floatingPoint));
// console.log(rounder5(floatingPoint));

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Ultracheese', deliverPizza));

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// console.log(processCall('Mango'));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }

//     return onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// Change code below this line

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// // Change code above this line

// console.log(getUserNames());

// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive === true);
// };
// // Change code above this line
// console.log(getActiveUsers());

// Change code below this line
// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };
// // Change code above this line

// const account = {
//   firstName: 'Oleksandr',
//   lastName: 'Moskalets',
//   balance: 487,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > 1000) {
//       onError(
//         `Сума зняття більша за ліміт транзакції, залишок - ${this.balance}`
//       );
//     } else if (amount > this.balance) {
//       onError(
//         `Сума зняття більша зазалишку на рахунку, залишок - ${this.balance}`
//       );
//     } else {
//       this.balance -= amount;
//       onSuccess(`Операція зняття відбулася успішно, залишок - ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > 1000) {
//       onError(
//         `Сума зарахування більша за ліміт транзакції, залишок - ${this.balance}`
//       );
//     } else {
//       this.balance += amount;
//       onSuccess(`Поповнення відбулося успішно, залишок - ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`Error! ${message}`);
// }

// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(4400, handleSuccess, handleError);
// account.withdraw(-5, handleSuccess, handleError);

// const numbers = [4, 5, 9, 85, 78, 51, 4];

// numbers.forEach(function (number, index, array) {
//   console.log(number);
// });

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const playersNames = players.map((player) => player.name);
// console.log(playersNames);

// const playerrsIds = players.map((player) => player.id);
// console.log(playerrsIds);

// const updatesPlayers = players.map((player) => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.table(updatesPlayers);

// const updatesPlayers = players.map((player) => {
//   if (player.id === 'player-3') {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// console.table(updatesPlayers);

// const updatesPlayers = players.map((player) =>
//   player.id === 'player-3'
//     ? { ...player, timePlayed: player.timePlayed + 1000 }
//     : player
// );

// console.table(updatesPlayers);

// const totalTime = players.reduce((total, player) => {
//   return total + player.timePlayed;
// }, 0);

// console.log(totalTime);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// console.table(tweets);

// const tweetsSortedBuTags = [...tweets].sort((curTweet, nextTweet) => {
//   return curTweet.tags.length - nextTweet.tags.length;
// });

// console.table(tweetsSortedBuTags);
// const allTags = tweets.reduce((acc, tweet) => {
//   return [...acc, ...tweet.tags];
// }, []);
// console.log(allTags);

// const allTags = tweets.flatMap((tweet) => tweet.tags);

// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
// }, {});
// console.log(tagsStats);

// const numbers = [4, 5, 9, 85, 78, 51, 4];

// console.log(numbers);

// ///cdsvsv

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });

// console.log(numbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const sortedPlayers = [...players].sort((a, b) => {
//   return a.points - b.points;
// });

// console.table(sortedPlayers);

// const playersByName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });

// console.table(playersByName);

// const sortedPlayersIsOnline = players
//   .filter((player) => player.online)
//   .sort((curPlayer, nextPlayer) => {
//     const result = curPlayer.name[0] > nextPlayer.name[0];

//     if (result) {
//       return 1;
//     }

//     if (!result) {
//       return -1;
//     }
//   });
// console.table(sortedPlayersIsOnline);

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// console.table(cars);

// const getModels = (array) => array.map((element) => element.model);

// console.log(getModels(cars));

// const makeCarsWithDiscount = (array, discount1, discount2) => {
//   return array.map((element) => ({
//     ...element,
//     price:
//       element.price > 25000
//         ? element.price - discount2
//         : element.price - discount1,
//   }));
// };

// console.table(makeCarsWithDiscount(cars, 2000, 2500));

// console.table(cars.filter((car) => car.type === 'truck'));

// const getCarOverPrice = (array, price) =>
//   array.find((element) => element.price > price);

// console.log(getCarOverPrice(cars, 300000));
// const getTotalPriceOverPrice = (array, price) =>
//   array.filter((car) => {
//     return car.price > price;
//   });
// // .reduce((acc, el) => {
// //   return el.amount * el.price + acc;
// // }, 0);

// console.log(getTotalPriceOverPrice(cars, 30000));

// // const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log('decrement -> this', this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.data-decrement');
// const incrementBtn = document.querySelector('.data-increment');
// const valueEl = document.querySelector('.data-value');

// decrementBtn.addEventListener('click', function () {
//   counter.decrement();
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//   counter.increment();
//   valueEl.textContent = counter.value;
// });

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const indexOfItemToRemove = this.items.indexOf(itemToRemove);

//     this.items.splice(indexOfItemToRemove, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems());
// storage.addItem('Droid');
// console.log(storage.getItems());
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//   }
//   padStart(str) {
//     this.value = `${str}${this.value}`;
//   }
//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   #price;

//   static max = {
//     MAX_PRICE: 50000,
//   };
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.max.MAX_PRICE) {
//       return;
//     } else {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);

//     // Change code above this line
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const car1 = new Car({ brand: 'BMW', model: 'X5', price: 50000 });

// console.log(car1.getPrice());

// console.log(car1.changePrice(4));
// console.log(car1.getPrice());

// class Blogger {
//   name = 'YouTube blogger';

//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts}`;
//   }

//   updatePostCount(val) {
//     this.numberOfPosts += val;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// console.log(mango);
// const obj = new Blogger();

// console.log(obj);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }
// }

// const coursesStorage = new Storage(['HTML', 'JS', 'CSS']);

// console.log(coursesStorage);
// console.table(coursesStorage.getItems());
// coursesStorage.addItem('React');
// console.table(coursesStorage.getItems());

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(val) {
//     this.#login = val;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(val) {
//     this.#email = val;
//   }
// }

// const mango = new User({ login: 'Mango', email: 'mango@mail.com' });

// console.log(mango);
// // console.log(mango.login);
// console.log(mango.login);
// mango.login = 'fgh';
// console.log(mango.login);
// console.log(mango.email);

// mango.email = 'sfdjchysj';
// console.log(mango.email);

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(notes) {
//     this.items = notes;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }
// }

// const myNotes = new Notes([]);

// console.log(myNotes);

// console.log(Notes.Priority);

// myNotes.addNote({ text: 'my first note', priority: Notes.Priority.LOW });

// console.log(myNotes);

// let counter = 0;

// function makeBigger() {
//   counter += 1;
// }

// makeBigger();
// makeBigger();
// makeBigger();
// makeBigger();
// makeBigger();

// console.log(counter);

// const user = {
//   name: 'fwrsv',
// };

// console.log(user);

// user.newName = user.name;
// delete user.name;

// console.log(user);
// function sayHi() {
//   console.log(name);
//   let age = 21;

//   console.log(age);
//   var name = 'Lydia';
// }

// sayHi();
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 3000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 3000);
// }

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter() {
//     return 2 * Math.PI * this.radius;
//   },
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };

// console.log(mouse.bird.size);

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(b);
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// // freddie.colorChange('orange');

// console.log(freddie);

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: 'Petya',
//   showName() {
//     console.log(this.username);
//   },
// };

// // petya.showName();

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   const getFullName = () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(customer.getFullName());

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// // makeMessage(customer.getFullName); // Буде помилка у виклику функції
// function greetGuest(greeting) {
// console.log(`${greeting}, ${this.username}.`);
// }
// console.log(greetGuest('Hi!'));
// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
// };

// console.log(historyService.getOrdersLog());

// class Chameleon {
//   static colorChange(newColor) {
//     Chameleon.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// freddie.colorChange('orange');

// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';

// console.log(bark.animal);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// const member = new Person('Lydia', 'Hallie');
// // Person.getFullName = function () {
// // return `${this.firstName} ${this.lastName}`;
// // };

// console.log(member);

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

// const a = 5;
// const b = bin(a);

// console.log(b);

// const myNoun = 'dog';
// const myAdjective = 'big';
// const myVerb = 'ran';
// const myAdverb = 'quickly';

// // Only change code below this line
// const wordBlanks = myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb; // Change this line
// // Only change code above this line
// console.log(wordBlanks);

// function functionWithArgs(n1, n2) {
//   const sum = n1 + n2;

//   console.log(sum);
// }

// functionWithArgs(1, 2);

// const names = [
//   'Hole-in-one!',
//   'Eagle',
//   'Birdie',
//   'Par',
//   'Bogey',
//   'Double Bogey',
//   'Go Home!',
// ];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (par === strokes) {
//     return names[0];
//   }
//   // Only change code above this line
// }

// console.log(golfScore(5, 4));

// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count -= 1;
//       break;
//   }

//   if (count > 0) {
//     return count + ' Bet';
//   } else {
//     return count + ' Hold';
//   }
//   // Only change code above this line
// }

// cc(2);
// cc(3);
// cc(7);
// cc('K');
// cc('A');

// Setup
// function phoneticLookup(val) {
//   let result = '';

//   // Only change code below this line
//   const obj = {
//     alpha: 'Adams',
//     bravo: 'Boston',
//     charlie: 'Chicago',
//     delta: 'Denver',
//     echo: 'Easy',
//     foxtrot: 'Frank',
//   };
//   result = obj[val];
//   // switch (val) {
//   //   case 'alpha':
//   //     result = 'Adams';
//   //     break;
//   //   case 'bravo':
//   //     result = 'Boston';
//   //     break;
//   //   case 'charlie':
//   //     result = 'Chicago';
//   //     break;
//   //   case 'delta':
//   //     result = 'Denver';
//   //     break;
//   //   case 'echo':
//   //     result = 'Easy';
//   //     break;
//   //   case 'foxtrot':
//   //     result = 'Frank';
//   // }

//   // Only change code above this line
//   return result;
// }

// console.log(phoneticLookup('foxtrot'));

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   }
//   return 'Not Found';
//   // Only change code above this line
// }

// console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));

// const myStorage = {
//   car: {
//     inside: {
//       'glove box': 'maps',
//       'passenger seat': 'crumbs',
//     },
//     outside: {
//       trunk: 'jack',
//     },
//   },
// };

// const gloveBoxContents = myStorage.car.inside['glove box'];
// console.table(myStorage);

// console.log(gloveBoxContents);

// Setup;
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// console.log(recordCollection);

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   const keys = Object.keys(records);

//   for (const key of keys) {
//     // console.log(key);
//     // console.log(records[key]);

//     if (key == id) {
//       // console.log('foud ' + key);
//       // console.log(records[key]);
//       records[key][prop] = value;
//       // console.log(records[key]);
//       // console.log(records[key][prop]);
//       if (records[key][prop] === '') {
//         // console.log('fesdv');
//         delete records[key][prop];
//         return records;
//         // console.log(records[key]);
//       }
//       if (value === 'tracks') {
//         records[key][prop] = [];
//         // console.log(records[key][prop]);
//         records[key][prop].push(value);
//         // console.log(records[key][prop]);
//       }
//       if (prop === 'tracks' && value === 'Free') {
//         // console.log('bingo');
//         records[key][prop] = [];
//         // // console.log(records[key][prop]);
//         records[key][prop].push(records[key].albumTitle);
//         // // console.log(records[key][prop]);
//       }
//     }
//   }

//   // console.log(keys);
//   return records;
// }

// // console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// // console.log(
// //   updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me')
// // );
// // console.log(updateRecords(recordCollection, 2548, 'artist', ''));
// // console.log(
// //   updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love')
// // );
// // console.log(updateRecords(recordCollection, 2468, 'tracks', 'Free'));
// console.log(updateRecords(recordCollection, 2548, 'tracks', ''));

// const array = {
//   albumTitle: 'ABBA Gold',
// };

// function updateRecords(array, prop, value) {
//   array[prop] = value;
//   return array;
// }

// console.log(updateRecords(array, 'artist', 'ABBA'));

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   const keys = Object.keys(records);

//   for (const key of keys) {
//     if (key == id) {
//       records[key][prop] = value;

//       if (records[key][prop] === '') {
//         delete records[key][prop];
//         return records;
//       }

//       if (prop === 'tracks') {
//         records[key][prop] = [];
//         records[key][prop].push(value);
//       }

//       if (prop === 'tracks' && value === 'Free') {
//         records[key][prop] = [];
//         records[key][prop].push(records[key].albumTitle);
//       }
//     }
//   }

//   return records;
// }

// // updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Setup
// const myArray = [];

// // Only change code below this line
// let i = 0;
// while (i <= 5) {
//   myArray.unshift(i);
//   i++;
// }

// console.log(myArray);

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].length);
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

// console.log(document);

// const navEl = document.querySelector('.site-nav');

// console.log(navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log(navLinksEl);

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('.site-nav');

//   console.log(navEl);

//   const navLinksEl = document.querySelectorAll('.site-nav__link');
//   console.log(navLinksEl);
// });

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//   const imageEl = document.querySelector('.hero__image');
//   console.log(imageEl);
//   console.log(imageEl.src);
//   imageEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
//   imageEl.alt = 'Это новый котик';
// });

// const heroTitleEl = document.querySelector('.hero__title');
// console.log(heroTitleEl);
// console.log(heroTitleEl.textContent);

// const imageEl = document.querySelector('.hero__image');

// console.log(imageEl.src);
// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.hasAttribute('src'));
// imageEl.remove('src');

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
// const nevEl = document.querySelector('.site-nav');
//   console.log(nevEl.classList);

//   nevEl.classList.add('super');
//   nevEl.classList.remove('site-nav');
// });

// const magicBtn = document.querySelector('.js-magic-btn');

// const nevEl = document.querySelector('.site-nav');

// const titleEl = document.createElement('h1');
// titleEl.classList.add('qwe');
// titleEl.textContent = 'fdsmkv fervfvdv';
// console.log(titleEl);

// document.body.appendChild(titleEl);
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'fghjl dfghjk';
// navLinkEl.href = '/gbuhjf';

// navItemEl.appendChild(navLinkEl);

// console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');
// console.log(navEl);

// navEl.insertBefore(navItemEl, navEl.firstElementChild);

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map((option) => {
//   const btnEl = document.createElement('button');
//   btnEl.type = 'button';
//   btnEl.classList.add('color-picker__option');
//   btnEl.textContent = option.label;
//   btnEl.style.backgroundColor = option.color;

//   return btnEl;
// });

// console.log(elements);

// const makeColorPickerOptions = (options) => {
//   return options.map((option) => {
//     const btnEl = document.createElement('button');
//     btnEl.type = 'button';
//     btnEl.classList.add('color-picker__option');
//     btnEl.textContent = option.label;
//     btnEl.style.backgroundColor = option.color;

//     return btnEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);

// colorPickerContainerEl.append(...elements);

// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// console.log(products);
// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h1');
// nameEl.classList.add('product__name');
// nameEl.textContent = product.name;

// const descrEl = document.createElement('p');
// descrEl.classList.add('product__description');
// descrEl.textContent = product.description;

// const priceEl = document.createElement('p');
// priceEl.classList.add('product__price');
// priceEl.textContent = `Price: ${product.price}`;

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

// const productsConainerEl = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h1');
//   nameEl.classList.add('product__name');
//   nameEl.textContent = name;

//   const descrEl = document.createElement('p');
//   descrEl.classList.add('product__description');
//   descrEl.textContent = description;

//   const priceEl = document.createElement('p');
//   priceEl.classList.add('product__price');
//   priceEl.textContent = `Price: ${price}`;

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// console.log(makeProductCard(products[0]));

// const elements = products.map(makeProductCard);

// console.log(elements);

// console.log(productsConainerEl);

// productsConainerEl.append(...elements);

// const paragraphEl = document.querySelector('.description');

// console.log(paragraphEl.nextElementSibling.children[1]);

// console.log(paragraphEl);

// const imgEl = document.querySelector('.some-img');
// console.log(imgEl);

// imgEl.setAttribute('src', 'https://picsum.photos/id/239/200/300');

// console.log(imgEl.getAttribute('alt'));

// // imgEl.removeAttribute('src');

// imgEl.src = 'https://picsum.photos/id/237/200/300';

// const titleEl = document.querySelector('#title');

// console.log(titleEl);

// titleEl.style.color = 'green';
// titleEl.style.backgroundColor = 'blue';
// titleEl.style.fontSize = '80px';

// titleEl.style.cssText =
//   'color: black; font-size: 40px; background-color: tomato';

// const imgEl = document.querySelector('.js-img');

// // imgEl.addEventListener('click');

// const swapBtnEl = document.querySelector('.js-swap-btn');

// const removeListenerBtnEl = document.querySelector('.js-remove-listener');

// const handleSwapImg = () => {
//   console.log(imgEl.src);
//   imgEl.src = 'https://picsum.photo/200/200';
// };

// swapBtnEl.addEventListener('click', handleSwapImg);

// const inputs = document.getElementById('my-form').elements;
// const inputByIndex = inputs[0];
// const inputByName = inputs['username'];

// console.log(inputByName);

// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(sum([2, 3, 4, 5], 3));

// // Setup
// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (const contact of contacts) {
//     if (contact.firstName === name) {
//       if (contact[prop]) {
//         return contact[prop];
//       }
//       return 'No such property';
//     }
//   }
//   return 'No such contact';
//   // Only change code above this line
// }

// console.log(lookUpProfile('Akira', 'likes'));

// console.log(lookUpProfile('Kristian', 'lastName'));
// // console.log(lookUpProfile('Sherlock', 'likes'));
// // console.log(lookUpProfile('Harry', 'likes'));
// // console.log(lookUpProfile('Bob', 'number'));
// // console.log(lookUpProfile('Bob', 'potato'));
// console.log(lookUpProfile('Akira', 'address'));

// // No such property

// Only change code below this line
// function countdown(n) {
//   if (n <= 0) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// // Only change code above this line

// console.log(countdown(10));
// console.log(countdown(5));
// console.log(countdown(-1));

// function rangeOfNumbers(startNum, endNum) {
//   let result = [];
//   if (startNum === endNum) {
//     return result.push(startNum);
//   }
//   result = rangeOfNumbers(startNum + 1, endNum);
//   result.push(startNum);

//   return result;
// }

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));

// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//   s[0];
//   // Using s = [2, 5, 7] would be invalid

//   // Only change code above this line
// }
// console.log(editInPlace());

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// // Only change code below this line

// const {
//   today: { low: lowToday, high: highToday },
//   tomorrow: { low: lowTomorrow, high: highTomorow },
// } = LOCAL_FORECAST;

// // Only change code above this line

// console.log(highToday);

// console.log('First');

// const greet = () => {
//   console.log('Hello, user!');
// };

// setTimeout(() => {
//   console.log('Hi from 3000');
// }, 3000);

// setInterval(() => {
//   console.log('Tick');
// }, 1000);

// console.log('Second');
// greet();

// let s = 1;

// const id = setInterval(() => {
//   console.log(s);

//   s += 1;
// }, 1000);

// document.addEventListener('click', () => {
//   clearInterval(id);
// });

// const date = new Date(2021, 1, 20, 3, 12);

// // date.setFullYear(2021);
// // date.setMonth(5);
// // date.setDate(25);
// console.log(date);

// console.log(date.getDate());
// console.log(date.getMonth());

// const weekDays = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

// // console.log(weekDays);

// const getWeekDay = (date) => {
//   const weekDayIndex = date.getDay();

//   console.log(weekDays[weekDayIndex]);
// };

// const date = new Date();

// getWeekDay(date);

// const getLastDayOfMonth = (year, momth) => {
//   const date = new Date(year, momth + 1);

//   return date;
// };

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('resolve');
//     }

//     reject('reject');
//   }, 1000);
// });

// console.log(promise);

// promise.then(
//   (result) => {
//     console.log(`OK!!! ${result}`);
//   },
//   (error) => {
//     console.log(`NO!!! ${error}`);
//   }
// );

// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// let counter = 1;

// const refs = {
//   StartBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// refs.StartBtn.addEventListener('click', () => {
//   const promises = horses.map(run);

//   refs.winnerField.textContent = '';
//   refs.progressField.textContent = 'Race started. No bet!';

//   Promise.race(promises).then(({ horse, time }) => {
//     refs.winnerField.textContent = `Horse ${horse} won! Its time is ${time}`;

//     updateResultsTable({ horse, time });
//   });

//   Promise.all(promises).then(() => {
//     refs.progressField.textContent = 'Race is done! Wait your bet.';
//   });
// });

// function updateResultsTable({ horse, time }) {
//   const tr = `<tr><td>${counter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);

//   counter += 1;
// }

// console.log(horses);

// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// // run('Mango')
// //   .then((x) => console.log(x))
// //   .catch((e) => console.log(e));

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const promises = horses.map(run);

// console.log(promises);

// // Promise.race(promises).then(({ horse, time }) =>
// //   console.log(`Horse ${horse} won! Its time is ${time}`)
// // );

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (0.5 > Math.random()) {
      console.log('resolve');
      resolve('Done!');
    } else {
      console.log('reject');
      reject('error');
    }
  }, 200);
});

// console.log(promise);

promise
  .then((data) => {
    console.log(data);
    return data + '!!';
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finish!');
  });
