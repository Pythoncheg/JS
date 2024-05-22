"use strict";

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const divEl = document.querySelector("div.form__checkbox");
// const btnEl = divEl.querySelector("button.btn");
// const checkboxEl = divEl.querySelector("input.checkbox");

// btnEl.addEventListener("click", (ev) => {
//   if (!checkboxEl.checked) {
//     const spanEl = document.createElement("span");
//     spanEl.innerHTML = "Необходимо согласиться с условиями";
//     divEl.appendChild(spanEl);
//   }
// });

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const divEl = document.querySelector("div.container");
// const checkTeaEl = divEl.querySelector("input.tea");
// const checkCoffeEl = divEl.querySelector("input.coffe");
// const btnEl = divEl.querySelector("button");
// btnEl.addEventListener("click", (ev) => {
//   if (checkTeaEl.checked) {
//     alert("чай закончился");
//   } else if (checkCoffeEl.checked) {
//     alert("Кофе закончился");
//   } else {
//     alert("Нужно выбрать напиток");
//   }
// });

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const password = "123";
// const divEl = document.querySelector("div.container");
// const inputEl = divEl.querySelector("input.password");
// const btnEl = divEl.querySelector("button.btn");
// btnEl.addEventListener("click", (ev) => {
//   if (inputEl.value === password) {
//     inputEl.classList.add("brd-green");
//   } else {
//     inputEl.classList.add("brd-red");
//   }
// });
// inputEl.addEventListener("click", (ev) => {
//   inputEl.classList.remove("brd-red");
//   inputEl.classList.remove("brd-green");
// });

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const divEl = document.querySelector("div.container");
const inputEl = divEl.querySelector("input.input");
const h1El = divEl.querySelector("h1.h1class");
const h3El = divEl.querySelector("h3.h3class");
inputEl.addEventListener("input", (ev) => {
  h1El.innerHTML = ev.target.value;
});
inputEl.addEventListener("change", (ev) => {
  h3El.innerHTML = ev.target.value;
});
