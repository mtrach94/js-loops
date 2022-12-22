// Задача 1
let age = prompt('Скільки вам років?');

if (age >= 0 && age <= 11) {
    alert("Ви дитина");
}
else if (age >= 12 && age <= 17) {
    alert("Ви підліток");
}
else if (age >= 18 && age <=59) {
    alert("Ви дорослий");
}
else if (age>=60) {
    alert ("Ви пенсіонер");
}
else {
    alert ("Введіть коректну відповідь");
}

// Задача 2
let numb = Number(prompt('Введіть число віл 0 до 9'));
switch (numb) {
    case 0:
        alert (')');
        break;
    case 1:
        alert ('!');
        break;
    case 2:
        alert ('@');
        break;
    case 3:
        alert ('#');
        break;
    case 4:
        alert ('$');
        break;
    case 5:
        alert ('%');
        break;
    case 6:
        alert ('^');
        break;
    case 7:
        alert ('&');
        break;
    case 8:
        alert ('*');
        break;
    case 9:
        alert ('(');
        break; 
    default:
        alert ('Немає такого символа');                                       
} 

// Задача 3
let min = Number(prompt('Напишіть мінімальне значення'));
let max = Number(prompt('Напишіть максимальне значення'));
let sum = 0;
for (let i = min; i <= max; i++) { 
    sum = sum + i;
  }
  alert ('Сума чисел в заданому діапазоні ' + sum);

// Задача 4
let a = Number(prompt('Напишіть перше число'));
let b = Number(prompt('Напишіть друге число'));
let minimum = 1;
if (a < b) {
    minimum = a;
  }
else {
    minimum = b;
  }
let result = 1;
for(let i = 1; i <= minimum; i++) {
if (a % i == 0 && b % i == 0) {
        result = i;
    } 
  }
alert('Найбільший дільник ' + result);

// Задача 5
  let c = Number(prompt('Напишіть число'));
  for (let i = 1; i <= c; i++) {
    if(c % i == 0) {
        alert('Дільник ' + i);
    }
  }

  // НОРМА Задача 2
  let price = Number(prompt('Введіть суму покупки'));
  let disc = 1;
  if (price >= 200 && price <= 300) {
    disc = price * 0.03;
  }
  else if (price >= 300 && price <= 500) {
    disc = price * 0.05;
  }
  else if (price >=500) {
    disc = price * 0.07;
  }
  else {
    alert ("Введіть коректні дані");
  }
let total = price - disc;
alert('Сума до оплати ' + total);



