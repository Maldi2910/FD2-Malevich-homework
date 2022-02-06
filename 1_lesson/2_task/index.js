const month = +prompt("какой сейчас номер месяца?");
const winter = "зима";
const spring = "весна";
const summer = "лето";
const autumn = "осень";

if ((month >= 1 && month <= 2) || month === 12) {
  console.log(winter);
} else if (month >= 3 && month <= 5) {
  console.log(spring);
} else if (month >= 6 && month <= 9) {
  console.log(summer);
} else {
  console.log(autumn);
}

// 2 case
// switch (month) {
//   case 3:
//     console.log(spring);
//     break;
//   case 4:
//     console.log(spring);
//     break;
//   case 5:
//     console.log(spring);
//     break;
//   case 6:
//     console.log(summer);
//     break;
//   case 7:
//     console.log(summer);
//     break;
//   case 8:
//     console.log(summer);
//     break;
//   case 9:
//     console.log(autumn);
//     break;
//   case 10:
//     console.log(autumn);
//     break;
//   case 11:
//     console.log(autumn);
//     break;
//   default:
//     console.log(winter);
//     break;
// }

// 3 case
// const months = {
//   '1': winter,
//   '2': winter,
//   '3': spring,
//   '4': spring,
//   '5': spring,
//   '6': summer,
//   '7': autumn,
//   '8': summer,
//   '9': summer,
//   '10': autumn,
//   '11': autumn,
//   '12': winter
// }

// console.log(months[+prompt('Введите число месяца')])
