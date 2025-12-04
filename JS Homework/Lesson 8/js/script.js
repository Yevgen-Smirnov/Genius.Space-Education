// Домашнє завдання
// ----- 1----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
//  та прочитати його значення.
//  <!DOCTYPE html>
//  <html>
//  <body>
//  <div data-widget-name="menu">Виберіть жанр</div>
//  <script>/* ваш код */</script>
//  </body>
//  </html>

// My answer:
<!DOCTYPE html>
<html>
<body>
  <div data-widget-name="menu">Виберіть жанр</div>

  <script>
    const elem = document.querySelector('[data-widget-name]');
    console.log(elem.getAttribute('data-widget-name')); // "menu"
  </script>
</body>
</html>
