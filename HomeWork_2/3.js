"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = +prompt("Введите целое число от 1 до 31");
let decNumber;
if (Number.isNaN(dayNumber) || dayNumber > 31) {
  console.log("Неверное значение");
} else if (dayNumber < 11) {
  decNumber = 1;
  console.log(`Число ${dayNumber} попадает в ${decNumber} декаду месяца.`);
} else if (10 < dayNumber && dayNumber < 21) {
  decNumber = 2;
  console.log(`Число ${dayNumber} попадает в ${decNumber} декаду месяца.`);
} else {
  decNumber = 3;
  console.log(`Число ${dayNumber} попадает в ${decNumber} декаду месяца.`);
}