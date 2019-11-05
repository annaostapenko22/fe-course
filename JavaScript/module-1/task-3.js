'use strict'

const ADMIN_PASSWORD = "jqueryismyjam";
let message = "";
const password = prompt("Please enter your password");

if (password) {
  if (password === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
} else {
  message = "Отменено пользователем!";
}
alert(message);
