// Домашнє завдання

// --1--
//  1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//  бал і кількість пропущених занять
//  2) написати метод який буде виводити цю інформацію
//  3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою  call apply bind
// My answer:
// const student = {
//     name: "",
//     specialty: "",
//     avgGrade: 0,
//     missedClasses: 0,

//     showInfo: function() {
//         console.log(`Ім'я: ${this.name}`);
//         console.log(`Спеціальність: ${this.specialty}`);
//         console.log(`Середній бал: ${this.avgGrade}`);
//         console.log(`Пропущені заняття: ${this.missedClasses}`);
//         console.log("--------------------------");
//     }
// };

// const student1 = {
//     name: "Олена",
//     specialty: "Комп'ютерні науки",
//     avgGrade: 89,
//     missedClasses: 3
// };

// const student2 = {
//     name: "Андрій",
//     specialty: "Програмна інженерія",
//     avgGrade: 92,
//     missedClasses: 1
// };

// const student3 = {
//     name: "Марія",
//     specialty: "Дизайн",
//     avgGrade: 76,
//     missedClasses: 5
// };

// student.showInfo.call(student1);
// student.showInfo.call(student2);
// student.showInfo.call(student3);

// student.showInfo.apply(student1);

// const showForStudent1 = student.showInfo.bind(student1);
// showForStudent1();

// --2--
//  Написати дві кнопки і закріпити на них функції
//  при натисканні на кнопку html - має видати коротке визначення що це таке
//  при натисканні на кнопку css - має видати коротке визначення що це таке
//  My answer:
//  <!DOCTYPE html>
// <html lang="uk">
// <head>
//   <meta charset="UTF-8">
//   <title>JS Buttons</title>
// </head>
// <body>

//   <button id="btnHtml">HTML</button>
//   <button id="btnCss">CSS</button>

//   <p id="output"></p>

//   <script>
//     const output = document.getElementById("output");

//     function showHTML() {
//       output.textContent = "HTML — це мова розмітки, яка використовується для створення структури веб-сторінок.";
//     }

//     function showCSS() {
//       output.textContent = "CSS — це мова стилів, яка використовується для оформлення та дизайну веб-сторінок.";
//     }

//     document.getElementById("btnHtml").addEventListener("click", showHTML);
//     document.getElementById("btnCss").addEventListener("click", showCSS);
//   </script>

// </body>
// </html>

// --3--
//  Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//  функція має повертати назву товару і вартість
// перевірити на варіантах:
//  1) banana 30,  4,5
//  2) cherry  58,   1,3
// 3) jrange 89. 3, 4
// My answer:
//  function shop(productName, pricePerKg, amountKg) {
//     const total = pricePerKg * amountKg;
//     return `Товар: ${productName}, вартість: ${total.toFixed(2)} грн`;
// }
