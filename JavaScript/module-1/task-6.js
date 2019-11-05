"use strict";

let input = Number(prompt("Enter your number"));

let total = 0;

while (input) {
  total += input;
  input = Number(prompt("Enter your number"));
  console.log(total);
  if (input === null) {
    break;
  }
}

alert(`Общая сумма чисел равна ${total}`);

// "use strict";

// let total = 0;
// let input = 0;
// do {
//   input = Number(prompt("Enter your number"));
//   total += input;
//   console.log(total);
// } while (input !== 0);
 
 
//   alert(`Общая сумма чисел равна ${total}`);

