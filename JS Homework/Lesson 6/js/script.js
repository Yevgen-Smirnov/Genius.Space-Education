// Домашнє завдання
//  Створити телефонну книгу
//  створити початковий клас Abonent, де зберігатимуться ім*я і номер
//  створити set який прийматиме телефон  і номер
//  створити get який виводитиме данні про абонента
//  створити три різних юзери
//  вивести данні

class Abonent {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  getDetails() {
    return `Абонент: ${this.name}, Номер телефону: ${this.phone}`;
  }
}

let user1 = new Abonent("Іван", "099-123-45-67");
let user2 = new Abonent("Марія", "067-765-43-21");
let user3 = new Abonent("Олександр", "050-111-22-33");

console.log(user1.getDetails());
console.log(user2.getDetails());
console.log(user3.getDetails());
