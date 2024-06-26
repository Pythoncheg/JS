"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const firstNumber = Math.trunc(Math.random() * 10);
const secondNumber = Math.trunc(Math.random() * 10);
console.log(
  `Сумма чисел ${firstNumber} и ${secondNumber} = ${summ(
    firstNumber,
    secondNumber
  )}
Разность чисел ${firstNumber} и ${secondNumber} = ${diff(
    firstNumber,
    secondNumber
  )}
Произведение чисел ${firstNumber} и ${secondNumber} = ${mult(
    firstNumber,
    secondNumber
  )}
Частное чисел ${firstNumber} и ${secondNumber} = ${div(
    firstNumber,
    secondNumber
  )}`
);

// ===========================================================================

function summ(a, b) {
  return a + b;
}
function diff(a, b) {
  const max = Math.max(a, b);
  if (a < max) {
    return b - a;
  }
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  const max = Math.max(a, b);
  if (a < max) {
    return b / a;
  }
  return a / b;
}
