const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// testingScope(true);

// *******************************************

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sort = (param1) => param1.sort((a, b) => a - b);
// Seu código aqui.

console.log(`Os números ${sort(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉