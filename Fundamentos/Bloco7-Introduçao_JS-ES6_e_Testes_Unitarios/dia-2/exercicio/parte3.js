const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionarParametro = (param1, param2, param3) => (param1[param2] = param3);

adicionarParametro(lesson2, 'turno', 'noite');
// console.log(lesson2);

const acharChaves = (param1) => Object.keys(param1);
// console.log(acharChaves(lesson3));

const tamanhoObject = (param1) => acharChaves(param1).length;
// console.log(tamanhoObject(lesson1));

const valueObject = (param1) => Object.values(param1);
// console.log(valueObject(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const numeroEstudantes = (param1) => {
  let total = 0;
  const array = Object.keys(param1);
  for (index in array) {
    total += param1[array[index]].numeroEstudantes;
  }
  return total;
};
// console.log(numeroEstudantes(allLessons));

const getValueByNumber = (param1, param2) => Object.values(param1)[param2];
// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (param1, param2, param3) => acharChaves(param1).includes(param2) && param1[param2] === param3 ? true : false;
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// *******************BONUS

const aulasMath = (param1, param2) => {
  let total = 0;
  const array = Object.keys(param1);
  for (index in array) {
    if (param1[array[index]].materia === param2) {
      total += 1;
    }
  }
  return total;
};

// console.log(aulasMath(allLessons, 'Matemática'));

const createReport = (param1, param2) => {
  const object = {
    professor: param2,
    aulas: [],
    estudantes: 0,
  }
  const array = Object.keys(param1);
  for (index in array) {
    if (param1[array[index]].professor === param2) {
      object.aulas.push(param1[array[index]].materia);
      object.estudantes += param1[array[index]].numeroEstudantes;
    }
  }
  return object;
}

console.log(createReport(allLessons, 'Maria Clara'))