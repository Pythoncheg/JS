"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const findEl = document.getElementById("super_link");
console.log(findEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const linkArray = document.querySelectorAll(".card-link");
for (let i = 0; i < linkArray.length; i++) {
  linkArray[i].textContent = "ссылка";
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const findElArr = document.querySelectorAll(".card-body .card-link");
console.log(findElArr);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataNumElement = document.querySelector("[data-number='50']");
console.log(dataNumElement);

// 5. Выведите содержимое тега title в консоль.

const titleElement = document.querySelector("title");
console.log(titleElement.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const parentElement = document.querySelector(".card-title");
console.log(parentElement.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const pElement = document.createElement("p");
pElement.textContent = "Привет";
const cardElement = document.querySelector(".card");
cardElement.prepend(pElement);

// 8. Удалите тег h6 на странице.

document.querySelector("h6").remove();
