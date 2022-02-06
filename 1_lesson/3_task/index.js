const num = +prompt("назовите число");
const evenOrOdd = num % 2 == 0 ? "четным" : "нечетным";
const negOrPos = num > 0 ? "положительным" : "отрицательным";
const integOrFract = num % 1 == 0 ? "целым" : "дробным";
console.log(`число ${num} является:
          ${evenOrOdd};
          ${negOrPos}; 
          ${integOrFract};`);
