"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const elementsArray = document.querySelectorAll(".dropdown-item");
elementsArray.forEach((element) => {
  element.classList.add("super-dropdown");
});
console.log(elementsArray);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const elementBtn = document.querySelector(".btn");
elementBtn.classList.toggle("btn-secondary");
console.log(elementBtn);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const elementMenu = document.querySelector(".menu");
elementMenu.classList.remove("dropdown-menu");
console.log(elementMenu);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divElementDropdown = document.querySelector("div.dropdown");
divElementDropdown.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const buttonElem = document.getElementById("dropdownMenuButton");
buttonElem.id = "superDropdown";
console.log(`Новый ID = ${buttonElem.id}`);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const menuElement = document.querySelector(
  "[aria-labelledby='dropdownMenuButton']"
);
menuElement.dataset.dd = "3";
console.log(menuElement);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggleElem = document.querySelector(".dropdown-toggle");
dropdownToggleElem.removeAttribute("type");
console.log(dropdownToggleElem);
