// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let Termos = numbers.length


// for (let index = Termos - 1; index > 0; index -= 1) {
//   for (let i2 = 0; i2 < index; i2 += 1) {
//     if (numbers[i2] > numbers[i2 + 1]) {
//       let position = numbers[i2];
//       numbers[i2] = numbers[i2 + 1];
//       numbers[i2 + 1] = position;
//     }
//   }
// }
// console.log(numbers)

// // // // // // // // FIM DO EXERCICIO 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers)

// // // // // // // // FIM DO EXERCICIO 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newNumbers = [];
// let calculo = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//   let referencia = index +1;
//   if(!isNaN(numbers[referencia])) {
//     calculo = numbers[index] * numbers[referencia];
//     newNumbers.push(calculo);
//   } else {
//     calculo = numbers[index] * 2;
//     newNumbers.push(calculo);
//   }
// }
// console.log (newNumbers)

// // // // // // OUTRA SOLUÇAO

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (index + 1 < numbers.length) {
//     newArray.push(numbers[index] * numbers[index + 1]);
//   } else {
//     newArray.push(numbers[index] * 2);
//   }
// }

// console.log(newArray);

// // // // // // // // FIM DO EXERCICIO 3
// tive que ir atras de outras soluções, minha logica não se aplicou aqui