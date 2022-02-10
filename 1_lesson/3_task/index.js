const num = +prompt("назовите число");
if (num === 0) {
  console.log(`${num} является: 
четным, 
целым, 
не является ни положительным, ни отрицательным`);
} else {
  const evenOrOdd = num % 2 == 0 ? "четным" : "нечетным";
  const negOrPos = num > 0 ? "положительным" : "отрицательным";
  const integOrFract = num % 1 == 0 ? "целым" : "дробным";
  console.log(`число ${num} является:
          ${evenOrOdd};
          ${negOrPos}; 
          ${integOrFract};`);
}
