"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const filteredProducts = products.filter(
  (item) => item.photos !== undefined && item.photos.length !== 0
);

const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log(filteredProducts);
console.log(sortedProducts);

/* Это моё решение. Так думать было проще, потому что сразу не разобрался с filter 

// function arrayFilter(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].photos !== undefined) {
//       if (array[i].photos.length !== 0) {
//         return .push (array[i]);
//       }
//     }
//   }
// }
*/
