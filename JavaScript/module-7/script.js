// TASK-1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
// const categoriesCount = document.querySelector("ul#categories").children;
// console.log(`В списке ${categoriesCount.length} категории`);

// const item = document.querySelectorAll("li.item");
// const title = document.querySelectorAll("li.item h2");

// const list = document.querySelectorAll(".item ul");
// for (let i = 0; i < item.length; i++) {
//   const itemLen = list[i].querySelectorAll("li");
//   console.log(`Категория: ${title[i].textContent}
//   Количество элементов: ${itemLen.length}`);
// }

// =============================================================================================
// TASK-2

// В HTML есть пустой список ul#ingredients.

{
  /* <ul id="ingredients"></ul>; */
}
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];
// let list = document.querySelector("ul#ingredients");
// console.log(list);
// const fragment = document.createDocumentFragment();
// const element = ingredients.forEach(elem => {
//   let item = document.createElement("li");
//   const text = elem;
//   item.textContent = text;
//   //   list.appendChild(item); (anothe variant)
//   fragment.appendChild(item);
// });
// list.appendChild(fragment);
// console.log(list);

// ============================================================================================
// TASK-3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   }
// ];
// const list = document.querySelector("ul#gallery");
// console.log(list);
// const template = images.forEach(elem => {
//   let listItem = `<li class="image-container"><img class="image" src=${elem.url} alt = ${elem.alt} /></li>`;
//   console.log(listItem);
//   list.insertAdjacentHTML("beforeend", listItem);
// });

// console.log(list);

// =======================================================================================================
// TASK-4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// const counter = document.querySelector("#counter");

// const decrement = counter.querySelector("[data-action = decrement]");

// const increment = counter.querySelector("[data-action = increment]");

// let counterView = counter.querySelector("span");

// let counterValue = 0;

// const decrease = () => {
//   counterValue -= 1;
//   return counterValue;
// };
// const increase = () => {
//   counterValue += 1;
//   return counterValue;
// };
// decrement.addEventListener("click", function() {
//   counterView.textContent = decrease();
//   console.log(counterValue);
// });
// increment.addEventListener("click", function() {
//   counterView.textContent = increase();
//   console.log(counterValue);
// });

// =================================================================================================
// TASK-5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

// const inputField = document.querySelector("[type=text]");
// const title = document.querySelector("h1");
// let titleName = title.querySelector("span");

// const nameGenerator = name => {
//   titleName.textContent = name;
//   if (!name) {
//     titleName.textContent = "незнакомец";
//   }
// };
// inputField.addEventListener("input", function() {
//   nameGenerator(inputField.value);
// });

// ===================================================================================================
// TASK-6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */
}
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// const inputField = document.querySelector("#validation-input");
// console.log(inputField);
// inputField.addEventListener("change", function() {
//   enteredInfo(inputField.value.length);
// });

// const enteredInfo = value => {
//   const val = parseInt(inputField.dataset.length);

//   if (value === val) {
//     inputField.classList.add("valid");
//   } else {
//     inputField.classList.remove("valid");
//     inputField.classList.add("invalid");
//   }
// };

// ==========================================================================================================
// TASK-7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// {
//   /* <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span> */
// }
// const text = document.querySelector("#font-size-control");
// const abrakadabra = document.querySelector("span#text");

// const textStyle = function() {
//   let counter = text.value;

//   abrakadabra.style.fontSize = counter + "px";
//   console.log(abrakadabra.style.fontSize);
//   console.log(text.style.fontSize);
//   console.log(text);
// };

// text.addEventListener("input", textStyle);

// =========================================================================================================
// TASK-8
// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// const inputField = document.querySelector("[type = number]");
// const createBtn = document.querySelector("[data-action=render]");
// const deleteBtn = document.querySelector("[data-action=destroy]");
// const boxContainer = document.querySelector("#boxes");
// const fragment = document.createDocumentFragment();

// const generateRgbNumber = function() {
//   return Math.round(Math.random() * 255);
// };

// const generateColor = function() {
//   const r = generateRgbNumber();
//   const g = generateRgbNumber();
//   const b = generateRgbNumber();
//   return `rgb(${r},${g},${b})`;
// };

// const squareGenerator = function(width, height, color) {
//   const square = document.createElement("div");
//   square.style.width = width + "px";
//   square.style.height = height + "px";
//   square.style.backgroundColor = color;
//   return square;
// };

// const createBoxes = amount => {
//   let parameter = 30;
//   for (let i = 0; i < amount; i++) {
//     const color = generateColor();
//     const square = squareGenerator(parameter, parameter, color);
//     parameter += 10;
//     boxContainer.append(square);
//   }
// };

// createBtn.addEventListener("click", () => {
//   boxContainer.innerHTML = "";
//   createBoxes(inputField.value);
//   inputField.value = "";
// });

// deleteBtn.addEventListener("click", function() {
//   boxContainer.innerHTML = "";
// });
