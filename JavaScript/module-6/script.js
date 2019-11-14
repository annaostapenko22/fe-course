import users from "./users.js";

("use strict");

// TASK-1

// const getUserNames = users => {
//   users = users.map(user => user.name);
//   return users;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// =========================================================================================
// TASK-2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   users = users.filter(user => user.eyeColor === color);
//   return users;
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// =============================================================================================
// TASK-3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   users = users.filter(user => user.gender === gender).map(user => user.name);
//   return users;
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ==============================================================================================
// TASK-4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   users = users.filter(user => !user.isActive);
//   return users;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ===============================================================================================
// TASK-5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   users = users.find(user => user.email === email);
//   return users;
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ==================================================================================================
// TASK-6
// олучить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   users = users.filter(elem => elem.age > min && elem.age < max);
//   return users;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ================================================================================================
// TASK-7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   users = users.reduce((acc, elem) => {
//     return (acc += elem.balance);
//   }, 0);
//   return users;
// };

// console.log(calculateTotalBalance(users)); // 20916

// ================================================================================================
// TASK-8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   users = users.reduce((acc, elem) => {
//     elem.friends.includes(friendName) && acc.push(elem.name);
//     return acc;
//   }, []);
//   return users;
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// =====================================================================================================
// TASK-9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   users = users
//     .sort((a, b) => (a.friends.length > b.friends.length ? 1 : -1))
//     .map(elem => elem.name);

//   return users;
// };

// console.log(getNamesSortedByFriendsCount(users));
// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
//   "Ross Vazquez"
// ];

// ==========================================================================================================

// TASK-10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const newArr = users
    .map(elem => {
      // console.log(elem.skills);
      return elem.skills;
    })
    .flat();
  users = [...new Set(newArr)].sort();
  return users;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
