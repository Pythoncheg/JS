"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", (ev) => {
  console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", (ev) => {
  console.log("Страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("super_element")) {
    console.log(
      `Класс "super_element" присутствует в элементе ${e.target.tagName.toLowerCase()}`
    );
  } else {
    console.log(
      "Элемент " +
        e.target.tagName.toLowerCase() +
        ' не содержит класс "super_element"'
    );
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaElement = document.querySelector("textarea");
textAreaElement.addEventListener("mouseover", (ev) => {
  console.log("Вы навели мышь на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulElement = document.querySelector("ul");

ulElement.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.stopPropagation();
    console.log(e.target.textContent);
  }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Думаю это связано с иерархией вызова события, мы идем вниз от окна до искомого элемента события и поднимаясь обратно, обрабатываем каждый снизу вверх. при обработке ulElement будет первей document

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liElements = document.querySelectorAll("li");
for (let i = 1; i < liElements.length; i += 2) {
  liElements[i].style.backgroundColor = "red";
}
