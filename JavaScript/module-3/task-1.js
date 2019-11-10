"use strict";
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user["hobby"] = "javascript";
user["mood"] = "happy";
user["premium"] = false;

const entries = Object.entries(user);
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
