// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const buttonEL = document.querySelector(".button");
// window.addEventListener("load", (ev) => {
//   console.log("Страница загрузилась");
// });

// buttonEL.addEventListener("click", (ev) => {
//   console.log("событие onklick");
// });

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const containerEl = document.querySelector(".container");
// const btn1 = document.createElement("Button");
// btn1.innerHTML = "1";
// containerEl.appendChild(btn1);

// const btn2 = document.createElement("Button");
// btn2.innerHTML = "2";
// containerEl.appendChild(btn2);

// const btn3 = document.createElement("Button");
// btn3.innerHTML = "3";
// containerEl.appendChild(btn3);

// const btn4 = document.createElement("Button");
// btn4.innerHTML = "4";
// containerEl.appendChild(btn4);

// const btn5 = document.createElement("Button");
// btn5.innerHTML = "5";
// containerEl.appendChild(btn5);

// let count = 0;

// function clickBtn(e) {
//   console.log(e.target.innerHTML);
// }
// containerEl.addEventListener("click", clickBtn);

// btn4.addEventListener("click", (ev) => {
//   console.log(`на кнопку 4 нажали ${++count} раз`);
// });

// btn5.addEventListener("click", (ev) => {
//   btn5.innerHTML = "Вы нажали на эту кнопку";
// });

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки

// const containerEl = document.querySelector(".container");
// const button = document.createElement("button");
// button.innerHTML = "button";
// containerEl.appendChild(button);
// button.addEventListener("click", (ev) => {
//   const h1El = document.createElement("h1");
//   h1El.innerHTML = "Нажато!";
//   containerEl.appendChild(h1El);
// });

// Создать вторую кнопку, которая будет удалять созданный заголовок h1

// const buttonRemove = document.createElement("button");
// buttonRemove.innerHTML = "Удалить";
// containerEl.appendChild(buttonRemove);
// buttonRemove.addEventListener("click", (ev) => {
//   const h1Array = containerEl.querySelectorAll("h1");
//   h1Array.forEach((element) => {
//     element.remove();
//   });
// });

// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const hoverElement = document.createElement("button");
// hoverElement.innerHTML = "кнопка 3";
// containerEl.appendChild(hoverElement);
// hoverElement.addEventListener("mouseout", (ev) => {
//   console.log("Вы убрали мышь");
// });
// hoverElement.addEventListener("mouseover", (ev) => {
//   console.log("Вы навели мышь");
// });

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const containerEl = document.querySelector(".container");

// const button = document.createElement("button");
// button.innerHTML = "создать новый";
// containerEl.appendChild(button);

// const ulElement = document.querySelector("ul");
// button.addEventListener("click", (ev) => {
//   const liEl = document.createElement("li");
//   liEl.innerHTML = "новый элемент списка";
//   ulElement.appendChild(liEl);
// });

// const button2 = document.createElement("button");
// button2.innerHTML = "удалить первое";
// containerEl.appendChild(button2);
// button2.addEventListener("click", (ev) => {
//   const liArray = ulElement.querySelectorAll("li");
//   if (liArray.length > 0) {
//     liArray[0].remove();
//   } else {
//     alert("нечего больше удалять!");
//   }
// });

// const button3 = document.createElement("button");
// button3.innerHTML = "click";
// containerEl.appendChild(button3);
// button3.addEventListener("click", function (e) {
//   e.target.setAttribute("class", "click");
// });
