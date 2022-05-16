const creatId = (param1) => {
  const email = `${param1.replace(/ /, '_').toLowerCase()}@trybe.com`

  return { name: param1, email: email };
};

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: action('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(creatId));

const testar = (param1, param2) => param1 === param2 ? true : false;

const sorteio = (param1, func) => {
  let numero = Math.random() * 5;
  numero = Math.ceil(numero);
  if (func(param1, numero)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

// console.log(sorteio(2, testar));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const validar = (param1, param2) => {
  let result = 0;
  for (index in param1) {
    if (param2[index] !== 'N.A') {
      if (param1[index] === param2[index]) {
        result += 1;
      } else {
        result -= 0.5;
      }
    }
  }
  return result;
};

const conferir = (param1, param2, func) => func(param1, param2);

console.log(conferir(RIGHT_ANSWERS, STUDENT_ANSWERS, validar));