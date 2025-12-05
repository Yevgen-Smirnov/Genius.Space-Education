// Домашнє завдання
// ----- 1----
//  Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
//   < div id = "text" > зникав.
//   My answer:
// HTML:
// <div id="text">Цей текст має зникнути після натискання кнопки</div>
// <button id="btn">Сховати</button>

// JavaScript:
// document.getElementById("btn").onclick = function() {
//     document.getElementById("text").style.display = "none";
// };

// ----- 2----
//   Напишіть такий код, щоб після натискання на кнопку, вона зникала.
//  My answer:
// HTML:
// <button id="btn">Натисни мене</button>;

// JavaScript:
// document.getElementById("btn").onclick = function () {
//   this.style.display = "none";
// };

// ----- 3----
//   Створіть дерево, яке показує / приховує дочірні вузли при кліці
//  My answer:
// <!doctype html>
// <html lang="uk">
// <head>
// <meta charset="utf-8" />
// <meta name="viewport" content="width=device-width,initial-scale=1" />
// <title>Дерево — показати/приховати дочірні вузли</title>
// <style>
//   /* Базовий вигляд дерева */
//   .tree { font-family: system-ui, Arial; line-height: 1.6; }
//   .tree ul { list-style: none; margin: 0 0 0 1rem; padding: 0; }
//   .tree li { position: relative; margin: 0.15rem 0; }

//   /* Кнопка-мітка вузла */
//   .node {
//     display: inline-flex;
//     align-items: center;
//     gap: .5rem;
//     cursor: pointer;
//     user-select: none;
//     padding: .1rem .25rem;
//     border-radius: 4px;
//   }
//   .node:focus { outline: 2px solid Highlight; }

//   /* Стрілка (caret) */
//   .caret {
//     width: 0; height: 0;
//     border-left: 6px solid transparent;
//     border-right: 6px solid transparent;
//     border-top: 9px solid currentColor;
//     transform-origin: center;
//     transition: transform .15s ease;
//     display: inline-block;
//   }

//   /* Обернути стрілку коли відкрито */
//   .has-children.open > .node .caret {
//     transform: rotate(180deg);
//   }

//   /* Сховати дочірні вузли */
//   .children { transition: max-height .18s ease, opacity .18s ease; overflow: hidden; }
//   .children.collapsed { max-height: 0; opacity: 0; pointer-events: none; }
//   .children.expanded { max-height: 1000px; opacity: 1; }

//   /* Текст без стрілки для листків */
//   .no-caret .caret { visibility: hidden; width: 0; height: 0; border: none; }

//   /* Невеличке відступлення для читабельності */
//   .label { font-size: 0.95rem; }
// </style>
// </head>
// <body>
//   <h1>Дерево (натисни на вузол)</h1>

//   <nav class="tree" aria-label="Навігаційне дерево">
//     <ul>
//       <li class="has-children open">
//         <div class="node" tabindex="0" role="button" aria-expanded="true">
//           <span class="caret" aria-hidden="true"></span>
//           <span class="label">Фрукти</span>
//         </div>
//         <ul class="children expanded" role="group">
//           <li class="has-children">
//             <div class="node" tabindex="0" role="button" aria-expanded="false">
//               <span class="caret" aria-hidden="true"></span>
//               <span class="label">Цитрусові</span>
//             </div>
//             <ul class="children collapsed" role="group" aria-hidden="true">
//               <li><div class="node no-caret"><span class="label">Апельсин</span></div></li>
//               <li><div class="node no-caret"><span class="label">Лимон</span></div></li>
//             </ul>
//           </li>
//           <li><div class="node no-caret"><span class="label">Яблуко</span></div></li>
//           <li><div class="node no-caret"><span class="label">Банан</span></div></li>
//         </ul>
//       </li>

//       <li class="has-children">
//         <div class="node" tabindex="0" role="button" aria-expanded="false">
//           <span class="caret" aria-hidden="true"></span>
//           <span class="label">Овочі</span>
//         </div>
//         <ul class="children collapsed" role="group" aria-hidden="true">
//           <li><div class="node no-caret"><span class="label">Морква</span></div></li>
//           <li><div class="node no-caret"><span class="label">Картопля</span></div></li>
//         </ul>
//       </li>
//     </ul>
//   </nav>

// <script>
//   // Делегування подій: ловимо кліки й Enter/Space для клавіатури
//   document.querySelector('.tree').addEventListener('click', function(e) {
//     const node = e.target.closest('.node');
//     if (!node) return;
//     toggleNode(node);
//   });

//   // Підтримка клавіш Enter і Space
//   document.querySelector('.tree').addEventListener('keydown', function(e) {
//     if (e.key === 'Enter' || e.key === ' ') {
//       const node = e.target.closest('.node');
//       if (!node) return;
//       e.preventDefault();
//       toggleNode(node);
//     }
//   });

//   function toggleNode(node) {
//     const li = node.closest('li');
//     const children = li.querySelector(':scope > .children');
//     if (!children) return;

//     const isCollapsed = children.classList.contains('collapsed');
//     if (isCollapsed) {

//       children.classList.remove('collapsed');
//       children.classList.add('expanded');
//       node.setAttribute('aria-expanded', 'true');
//       children.setAttribute('aria-hidden', 'false');
//       li.classList.add('open');
//     } else {

//       children.classList.remove('expanded');
//       children.classList.add('collapsed');
//       node.setAttribute('aria-expanded', 'false');
//       children.setAttribute('aria-hidden', 'true');
//       li.classList.remove('open');
//     }
//   }

//   (function initTree() {
//     document.querySelectorAll('.tree li').forEach(li => {
//       const children = li.querySelector(':scope > .children');
//       const node = li.querySelector(':scope > .node');
//       if (!children) {
//         li.classList.add('no-caret');
//       } else {
//         if (node && node.getAttribute('aria-expanded') === 'true') {
//           children.classList.add('expanded');
//           children.setAttribute('aria-hidden', 'false');
//           li.classList.add('open');
//         } else {
//           children.classList.add('collapsed');
//           children.setAttribute('aria-hidden', 'true');
//         }
//       }
//     });
//   })();
// </script>
// </body>
// </html>
