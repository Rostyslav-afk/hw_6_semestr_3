// #1 Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
let number = 0;

while (number < 10) {
    number += 1
    console.log("Числа: ", number);
}   

// #2 Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
for (let i = 2; i <= 20; i += 2) {
    if (i % 2 !== 0) {
       continue;
    }
   console.log(i);  
}