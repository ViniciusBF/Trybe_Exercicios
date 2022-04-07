// const a = 23;
// const b = 21;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao)
// console.log(subtracao)
// console.log(multiplicacao)
// console.log(divisao)
// console.log(modulo)

// // // // // // // // // FIM DO EXERCICIO 1

// const maior = 60;
// const menor = 50;

// if (maior > menor) {
//   console.log(maior)
// } else {
//   console.log(menor)
// }

// // // // // // // // // FIM DO EXERCICIO 2

// const numberOne = 45
// const numberTwo = 66
// const numberThree = 67

// if (numberOne > numberTwo && numberOne > numberThree) {
//   console.log(numberOne)
// } else if (numberTwo > numberOne && numberTwo > numberThree) {
//   console.log(numberTwo)
// } else {
//   console.log(numberThree)
// }

// // // // // // // // // FIM DO EXERCICO 3

// let number = -25

// if (number > 0) {
//   console.log('positive')
// } else if (number < 0) {
//   console.log('negative')
// } else {
//   console.log('zero')
// }

// // // // // // // // // FIM DO EXERCICIO 4

// const anguloUm = -45
// const anguloDois = 55
// const anguloTres = 80

// if (anguloUm > 0 && anguloDois > 0 && anguloTres > 0) {
// if (anguloUm + anguloDois + anguloTres == 180) {
//   console.log(true)
// } else {
//   console.log(false)
// }
// } else {
//   console.log('erro')
// }

// // // // // // // // FIM DO EXERCICIO 5

// let peca = 'QUEen';

// switch (peca.toLowerCase()) {
//   case "king":
//     console.log('one square in any direction.');
//     break;

//   case "queen":
//     console.log('diagonally, horizontally, or vertically any number of squares.');
//     break;

//   case "rook":
//     console.log('horizontally or vertically any number of squares.');
//     break;

//   case "bishop":
//     console.log('diagonally any number of squares.');
//     break;

//   case "knight":
//     console.log('in an "L" shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.');
//     break;

//   case "pawn":
//     console.log('vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.');
//     break;

//   default:
//     console.log(peca)
//     break;
// }

// // // // // // // // FIM DO EXERCICIO 6

// let nota = 0

// if (nota >= 90 && nota < 101) {
//   nota = 'A';
//   console.log(nota);
// } else if (nota >= 80 && nota < 90) {
//   nota = 'B';
//   console.log(nota);
// } else if (nota >= 70 && nota < 80) {
//   nota = 'C';
//   console.log(nota);
// } else if (nota >= 60 && nota < 70) {
//   nota = 'D';
//   console.log(nota);
// } else if (nota >= 50 && nota < 60) {
//   nota = 'E';
//   console.log(nota);
// } else if (nota < 50 && nota >= 0) {
//  nota = 'F';
//  console.log(nota);
// } else {
//   console.log('erro');
// }

// // // // // // // // FIM DO EXERCICIO 7

// const numOne = 33;
// const numTwo = 45;
// const numThree = 25;

// if (numOne % 2 == 0 || numTwo % 2 == 0 || numThree == 0) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// // // // // // // // FIM DO EXERCICIO 8

// const numOneI = 34;
// const numTwoI = 44;
// const numThreeI = 26;

// if (numOneI % 2 != 0 || numTwoI % 2 != 0 || numThreeI % 2 != 0) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// // // // // // // // FIM DO EXERCICIO 9

// const custoProduto = 1000
// const valorVenda = 1500
// const produtosVendidos = 1000

// let valorCustoTotal = custoProduto + (custoProduto * 20 / 100)
// let lucro = valorVenda - valorCustoTotal
// let lucroEstimado = lucro * produtosVendidos

// console.log(lucroEstimado)

// // // // // // // // FIM DO EXERCICIO 10

const salario = 3000;
let inssDeduzido = 0;
let resultado = 0;

if (salario <= 1556.94 && salario > 0) {
  inssDeduzido = salario - (salario * 0.08);
} else if (salario >= 1556.95 && salario <= 2594.92) {
  inssDeduzido = salario - (salario * 0.09);
} else if (salario >= 2594.93 && salario <= 5189.82) {
  inssDeduzido = salario - (salario * 0.11);
} else if (salario > 5189.82) {
  inssDeduzido = salario - 570.88;
} else {
  console.log('valor invalido')
}

if (inssDeduzido <= 1903.98) {
  resultado = inssDeduzido
} else if (inssDeduzido >= 1903.99 && inssDeduzido <= 2826.65) {
  resultado = inssDeduzido - (inssDeduzido * 0.075 - 142.80);
} else if (inssDeduzido >= 2826.66 && inssDeduzido <= 3751.05) {
  resultado = inssDeduzido - (inssDeduzido * 0.15 - 354.80);
} else if (inssDeduzido >= 3751.06 && inssDeduzido <= 4664.68) {
  resultado = inssDeduzido - (inssDeduzido * 0.225 - 636.13);
} else if (inssDeduzido > 4664.68) {
  resultado = inssDeduzido - (inssDeduzido * 0.275 - 869.36);
} else {
  console.log('valor invalido')
}

console.log(resultado)

// // // // // // // // FIM DO EXERCICIO 11
// GOSTEI MUITO DESSE FINAL, ME FEZ GASTAR UM TEMPINHO.