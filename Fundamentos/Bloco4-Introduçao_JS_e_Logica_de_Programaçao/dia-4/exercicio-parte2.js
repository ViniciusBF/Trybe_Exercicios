// function verificaPalindrome (par1) {
//   let stringVazia = '';
//   let resultado = false;

//   for(let index = par1.length - 1; index >= 0; index -= 1) {
//     stringVazia += par1[index];
//   }

//   if (stringVazia == par1) {
//     resultado = true;
//   }
//   return resultado;
// }

// console.log(verificaPalindrome('arara'))

// ------------------ FIM DO EXERCICIO 1

// let array = [2, 3, 6, 7, 10, 1];

// function maiorValorArray(par1) {
//   let resultado = 0
//   for(let index = 0; index < par1.length; index += 1) {
//     let referencia = 0
//     for(let i2 = 0; i2 < par1.length; i2 += 1) {
//       if(par1[index] > par1[i2]) {
//         referencia += 1;
//       }
//       if(referencia == par1.length - 1) {
//         resultado = index
//         break;
//       }
//     }
//   }
//   return resultado;
// }

// console.log(maiorValorArray(array))

// ------------------ FIM DO EXERCICIO 2

// let array2 = [2, 4, 6, 7, 10, 0, -3];

// function menorValorArray(par1) {
//   let resultado = 0
//   for(let index = 0; index < par1.length; index += 1) {
//     let referencia = 0
//     for(let i2 = 0; i2 < par1.length; i2 += 1) {
//       if(par1[index] < par1[i2]) {
//         referencia += 1;
//       }
//       if(referencia == par1.length - 1) {
//         resultado = index
//         break;
//       }
//     }
//   }
//   return resultado;
// }

// console.log(maiorValorArray(array2))

// ------------------ FIM DO EXERCICIO 3

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorQuantidadeCaracteres(par1) {
//   let resultado = 0;
//   for(let index = 0; index < par1.length; index += 1) {
//     let referencia = 0;
//     for(let i2 = 0; i2 < par1.length; i2 += 1) {
//       if(par1[index].length > par1[i2].length) {
//         referencia += 1;
//       }
//       if(referencia == par1.length - 1) {
//         resultado = par1[index];
//         break;
//       }
//     }
//   }
//   return resultado;
// }

// console.log(maiorQuantidadeCaracteres(nomes))

// ------------------ FIM DO EXERCICIO 4

// let numeros = [2, 3, 2, 5, 8, 2, 3];

// function maiorRepeticao(par1) {
//   let resultado = [0, 0];
//   for (let index = 0; index < par1.length; index += 1) {
//     let referencia = 0;
//     for (let i2 = 0; i2 < par1.length; i2 += 1) {
//       if (par1[index] == par1[i2]) {
//         referencia += 1;
//       }
//     }
//     if (referencia > resultado[1]) {
//       resultado[0] = par1[index];
//       resultado[1] = referencia;
//     }
//   }
//   return resultado[0];
// }

// console.log(maiorRepeticao(numeros));

// ------------------ FIM DO EXERCICIO 5

// function soma(par1) {
//   let resultado = 0;
//   if (par1 >= 0) {
//     for(let index = 0; index <= par1; index += 1) {
//       resultado += index;
//     }
//   }
//   return resultado;
// }

// console.log(soma(5))

// ------------------ FIM DO EXERCICIO 6

// function detectarPalavra(par1, par2) {
//   let resultado = false;
//   let palavraCortada = par1.slice(par1.length - par2.length)

//   if(palavraCortada == par2) {
//     resultado = true;
//   }
//   return resultado
// }

// console.log(detectarPalavra('trybe', 'be'))

// ------------------ FIM DO EXERCICIO 7