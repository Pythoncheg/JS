// const divElement = document.querySelector("div#block");
// console.log(divElement);
// console.log(divElement.querySelectorAll("p.www")[0].textContent);

// Задание 2 (тайминг 15 минут)
// 1 Дан тег <a class="link" href="#">link text html</a>
// a. Вам необходимо поменять текст внутри ссылки на “link
// text js”

// const linkEl = document.querySelector("a.link");
// linkEl.innerHTML = "link text js";

// b. Заменить href, на значение
// https://developer.mozilla.org/ru/

// linkEl.href = "https://developer.mozilla.org/ru/";

// 2 Дан тег <img class="photo" src="" alt="">
// a. Вам необходимо с помощью js поменять значение src на
// любое изображение из интернета

// const imgEl = document.querySelector("img.photo");
// imgEl.src =
//   "https://img.freepik.com/premium-photo/college-students-cramming-outdoor_23-2149649363.jpg?w=1380";

// Задание 3 (тайминг 20 минут)
// 1 Дан тег <div class="content"></div>
// 2 Создайте новый элемент p
// 3 Добавьте в него текст “Новый текстовый элемент”
// 4 Добавьте созданный элемент внутри <div
// class="content"></div>
// 5 Удалите добавленный узел

// const linkEl = document.querySelector("div.content");
// const pEl = document.createElement("p");
// pEl.innerHTML = "новый текстовый элимент";
// linkEl.appendChild(pEl);
// pEl.remove();

// Задание 4 (тайминг 15 минут)
// 1 Создать элемент button, добавить в блок <div
// class="content"></div>
// 2 При клике на который в консоль выводится сколько раз
// пользователь нажал на данную кнопку

// const divEl = document.querySelector("div.content");
// const btnEl = document.createElement("button");
// let count = 0;
// btnEl.innerHTML = "click me!";
// btnEl.onclick = function (e) {
//   count++;
//   console.log(count);
// };
// divEl.appendChild(btnEl);

// 1 Дан тег <div class="content"></div>
// 2 Создайте с помощью javascript новый элемент button
// 3 Добавьте текст для кнопки “Отправить”
// 4 При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”

const divEl = document.querySelector("div.content");
const btnEl = document.createElement("button");
btnEl.textContent = "Отправить";
btnEl.onclick = function (e) {
  e.target.textContent = "Текст отправлен";
  e.target.style.color = "red";
};
divEl.appendChild(btnEl);
btnEl.classList.add("btn");
btnEl.style.color = "blue";
