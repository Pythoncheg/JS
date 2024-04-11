"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = [];
let summArrayElements = 0;
let minArrayElement;
const newArrayContainingIndexes = [];

for (let i = 0; i < 5; i++) {
  array.push(Math.trunc(Math.random() * 10));
}
for (let i = 0; i < array.length; i++) {
  summArrayElements += array[i];
  if (i === 0) minArrayElement = array[0];
  if (minArrayElement > array[i]) minArrayElement = array[i];
  if (array[i] === 3) newArrayContainingIndexes.push(i);
}
console.log(`Сформирован массив: [${array}]`);
console.log("Сумма элементов массива " + summArrayElements);
console.log("Минимальное значение в массиве " + minArrayElement);
console.log(`Новый массив, содержащий индексы сгенерированного выше массива,
в которых значение равно 3: [${newArrayContainingIndexes}]`);
