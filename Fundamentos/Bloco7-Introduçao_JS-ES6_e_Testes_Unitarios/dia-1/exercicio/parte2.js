const fatorial = numb => numb > 1 ? numb * fatorial(numb - 1) : 1;
// console.log(fatorial(5));

// **************************************

const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'
const array = [];

const palavra = (pala) => pala.sort((a, b) => b.length - a.length)
const maiorPalavra = (word) => word.split(' ');
// console.log(palavra(maiorPalavra(longestWord))[0])

// **********************************************

const frase = ["Android", "iOS", "Architecture", "Teach", "Run"];

const fraseT = (param1) => `Tryber ${param1} aqui!`;

function buildSkillsPhrase() {
  const result = `
  Minhas cinco principais habilidades são:
  * ${frase[0]};
  * ${frase[1]};
  * ${frase[2]};
  * ${frase[3]};
  * ${frase[4]};
  #goTrybe`
  return result;
}

console.log(fraseT('Vini'), buildSkillsPhrase());