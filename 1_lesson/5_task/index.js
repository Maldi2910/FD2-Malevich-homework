const white = "\u2B1C";
const black = "\u2B1B";
let result = "";
let currentRow = "";
let lastCant = "";
 // строки
for (let i = 0; i < 8; i++) {
  if(i % 2 === 0){
    lastCant = black; 
  } else {
    lastCant = white; 
  }
  // колонки и формируем полную строку
  for (let j = 0; j < 8; j++) { 
    if(lastCant === white){
       currentRow += black;
       lastCant = black;
    } else {
      currentRow += white;
      lastCant = white;
    }
  }
  result = `${result}${currentRow}\n`;
  currentRow = "";
}

console.log(result);