// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 
// { area: 0, perimetro: 0 } 
// perimetro = (base *2) + (altura * 2)
// area = base * altura

function calculo(par1, par2) {
  let resultado = {};

  resultado.perimetro = (par1 * 2) + (par2 * 2);
  resultado.area = par1 * par2;

  return resultado
}


console.log(calculo(10, 11))

// Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
// {
//  pares: 0, 
//  ímpares: 0 
// } 

function parImpar (par1) {
  let resultado = {
    pares: 0,
    ímpares: 0,
  }
  for(let index = 0; index < par1.length; index += 1) {
    if(par1[index] % 2 === 0) {
      resultado.pares += 1;
    } else {
      resultado.ímpares += 1;
    }
  }
  return resultado
}

let array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(parImpar(array))

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. 

// Valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true

// let palavra1 = 'trybe'
// let palavra2 = 'be'
// console.log(palavra1.slice(palavra1.length - palavra2.length))

function detectarPalavra(par1, par2) {
  let resultado = false;
  let palavraCortada = par1.slice(par1.length - par2.length)

  if(palavraCortada == par2) {
    resultado = true;
  }
  return resultado
}

console.log(detectarPalavra('trybe', 'be'))