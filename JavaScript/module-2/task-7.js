let newLogin = "";
let enteredLogin = "";
let uniqueLogin;
let login = "";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

console.log(`Is valid? - ${isLoginValid(login)}`);
let allLogins = logins;
const isLoginUnique = (allLogins, login) => {
  enteredLogin = isLoginValid(login);

  for (let i = 0; i < allLogins.length; i++) {
    if (login !== allLogins[i]) {
    } else {
      return false;
    }
  }
  return true;
};

console.log(`Is unique? - ${isLoginUnique(allLogins, enteredLogin)}`);

const addLogin = (allLogins, login) => {
  uniqueLogin = isLoginUnique(allLogins, login);
  if (isLoginValid(login) === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else {
    if (uniqueLogin) {
      newArrayOfLogins = allLogins.push(login);
      console.log(allLogins);
      console.log("Логин успешно добавлен!");
    } else {
      console.log("Такой логин уже используется!");
    }
  }

  return addLogin;
};

addLogin(allLogins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// ==========================  WITH PROMPT  AND ALERT =============================================
// let newLogin = "";
// let enteredLogin = "";
// let uniqueLogin;
// let input = prompt("Please enter your login");

// const isLoginValid = function(login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(`Is valid? - ${isLoginValid(input)}`);
// const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginUnique = function(allLogins, login) {
//   enteredLogin = isLoginValid(login);

//   for (let i = 0; i < allLogins.length; i++) {
//     if (input !== allLogins[i]) {
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(`Is unique? - ${isLoginUnique(allLogins, enteredLogin)}`);

// const addLogin = (allLogins, login) => {
//   uniqueLogin = isLoginUnique(allLogins, login);
//   if (isLoginValid(input) === false) {
//     alert("Ошибка! Логин должен быть от 4 до 16 символов");
//   } else {
//     if (uniqueLogin) {
//       newArrayOfLogins = allLogins.push(login);
//       console.log(allLogins);
//       alert("Логин успешно добавлен!");
//     } else {
//       alert("Такой логин уже используется!");
//     }
//   }

//   return addLogin;
// };
// addLogin(allLogins, input);
