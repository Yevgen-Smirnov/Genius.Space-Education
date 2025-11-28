// Домашнє завдання.

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// My answer:
// let a = 1;
// let b = 0;
// let c = -3;
// console.log(a > 0);
// console.log(b > 0);
// console.log(c > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// My answer:
// let a = 'test';
// let b = 'qwerty';
// let c = true;
// console.log(a === 'test');
// console.log(b === 'test');
// console.log(c === 'test');

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// My answer:
// let a = 1;
// let b = 10;
// let c = 13;
// function checkNumber(num) {
//     if (num > 10) {
//         num = num - 5;
//     } else {
//         num = num + 5;
//     }
//     console.log(num);
// }
// checkNumber(a);
// checkNumber(b);
// checkNumber(c);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// My answer:
// function getMonth(num) {
//   switch (num) {
//     case 1:
//       console.log("Січень");
//       break;
//     case 2:
//       console.log("Лютий");
//       break;
//     case 3:
//       console.log("Березень");
//       break;
//     case 4:
//       console.log("Квітень");
//       break;
//     case 5:
//       console.log("Травень");
//       break;
//     case 6:
//       console.log("Червень");
//       break;
//     case 7:
//       console.log("Липень");
//       break;
//     case 8:
//       console.log("Серпень");
//       break;
//     case 9:
//       console.log("Вересень");
//       break;
//     case 10:
//       console.log("Жовтень");
//       break;
//     case 11:
//       console.log("Листопад");
//       break;
//     case 12:
//       console.log("Грудень");
//       break;
//     default:
//       console.log("Введіть число від 1 до 12");
//   }
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// My answer:
// function sumDigits(num) {
//   let a = Math.floor(num / 100); // сотні
//   let b = Math.floor((num % 100) / 10); // десятки
//   let c = num % 10; // одиниці

//   return a + b + c;
// }
