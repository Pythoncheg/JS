// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function helloUser(name, surname, age) {
//   console.log(`Привет, ${name} ${surname}. Вы уже большой, Вам ${age}.`);
// }

// helloUser("Денис", "Герасимов", "34");

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// function madeSquare(number) {
//   return number ** 2;
// }

// console.log(madeSquare(2));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function checkPosinivOrNegativ(number) {
//   if (number === 0 || typeof number !== "number") {
//     return;
//   } else if (number > 0) {
//     console.log("+++");
//   } else {
//     console.log("---");
//   }
// }

// checkPosinivOrNegativ(1);

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// function summaryNumbers(a, b, c) {
//     console.log(a+b+c);
// }

// const summaryNumbers = (a, b, c) => console.log(a + b + c);
// const number1 = Math.trunc(Math.random() * 10);
// const number2 = Math.trunc(Math.random() * 10);
// const number3 = Math.trunc(Math.random() * 10);
// summaryNumbers(number1, number2, number3);

// 3. Дан код:

// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }

// Расскажите, каким будет результат каждого из вызовов функции.

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// const madeSquare = (x) => Math.sqrt(x);
// console.log(madeSquare(2) + madeSquare(3));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// function findMin(x, y) {
//   return Math.min(x, y);
// }
// console.log(findMin(12, 3));

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// function dayWeek(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       return "Понедельник";
//       break;
//     case 2:
//       return "Вторник";
//       break;
//     case 3:
//       return "Среда";
//       break;
//     case 4:
//       return "Четверг";
//       break;
//     case 5:
//       return "Пятница";
//       break;
//     case 6:
//       return "Суббота";
//       break;
//     case 7:
//       return "Воскресенье";
//       break;

//     default:
//       return "Не верное число";
//       break;
//   }
// }

// const userImput = +prompt("Введите число");
// console.log(dayWeek(userImput));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// function welcomeMesage(name) {
//   let now = new Date();
//   let hour = now.getHours();
//   if (hour < 6) {
//     return `Доброй ночи, ${name}`;
//   }
//   if (hour < 12) {
//     return `Доброе утро, ${name}`;
//   }
//   if (hour < 18) {
//     return `Добрый день, ${name}`;
//   }
//   return `Добрый вечер, ${name}`;
// }

// console.log(welcomeMesage("Денис"));

// const number = 500
// console.log(number * 0.75);

/**
 * Функция возвращает приветствие
 * @param {String} name - Имя пользователя
 * @param {Number} age - Возраст пользователя
 * @returns {String} - Строка с приветсвием
 */
// function sayHello(name, age) {
//   return `Привет, ${name}, Вам ${age}`;
// }
