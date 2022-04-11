// let tamanho = 5;
// let quadrado = '';

// for(let index = 1; index <= tamanho; index += 1) {
//   quadrado += ' *';
// }

// for(let index = 1; index <= tamanho; index += 1) {
//   console.log(quadrado);
// }

// // // // // // // // FIM DO EXERCICIO 1

// let valor = 5;
// let triangulo = '';

// for(let index = 1; index <= valor; index += 1) {
//   triangulo += '*';
//   console.log(triangulo)
// }

// // // // // // // // FIM DO EXERCICIO 2

// let numero = 5;
// let res = '';

// for(let index = 1; index <= numero; index += 1) {
//   for(let i2 = numero - index; i2 > 0; i2 -= 1) {
//     res += ' ';
//   }
//   for(let i3 = 1; i3 <= index; i3 += 1) {
//     res += '*';
//   }
//   console.log(res);
//   res = '';
// }

// // // // // // // // FIM DO EXERCICIO 3

// let n = 10;
// let asterisco = '*';
// let valorFinal = '';

// let Meio = (n + 1) / 2;
// let esquerda = Meio;
// let direita = Meio;

// for (let index = 0; index <= Meio; index += 1) {
//   for (let i2 = 0; i2 <= n; i2 += 1) {
//     if (i2 > esquerda && i2 < direita) {
//       valorFinal = valorFinal + asterisco;
//     } else {
//       valorFinal = valorFinal + ' ';
//     }
//   }
//   console.log(valorFinal);
//   valorFinal = '';
//   direita += 1;
//   esquerda -= 1
// };

// // // // // // // // FIM DO EXERCICIO 4

// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';

// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

// // // // // // // // FIM DO EXERCICIO 5


// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');

// // // // // // // // FIM DO EXERCICIO 6