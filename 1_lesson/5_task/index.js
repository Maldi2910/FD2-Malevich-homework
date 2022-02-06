const slash = "\u2B1C";
const space = "\u2B1B";
let result = "";
let currentRow = "";
let lastCant = "";
 // строки
for (let i = 0; i < 8; i++) {
  if(i % 2 === 0){
    lastCant = space; 
  } else {
    lastCant = slash; 
  }
  // колонки и формируем полную строку
  for (let j = 0; j < 8; j++) { 
    if(lastCant === slash){
       currentRow += space;
       lastCant = space;
    } else {
      currentRow += slash;
      lastCant = slash;
    }
  }
  result = `${result}${currentRow}\n`;
  currentRow = "";
}

console.log(result);