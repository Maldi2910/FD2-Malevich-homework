const width = +prompt("Введите ширину прямоугольника:");
const length = +prompt("Введите длину прямоугольника:");
const area = width * length;
const perimeter = 2 * (width + length);
if (width === length) {
  console.log("Перед нами квадрат!");
} else {
  console.log("Перед нами прямоугольник!");
}
console.log(`Площадь которого равна: ${area};
Периметр которого равен: ${perimeter};
`);
