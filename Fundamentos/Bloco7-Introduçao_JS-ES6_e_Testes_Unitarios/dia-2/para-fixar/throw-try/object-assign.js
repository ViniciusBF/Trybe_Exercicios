// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// // console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// // console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// *******************************


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

console.log(person['Roberto']);


// const getDayName = (number) => {
//   if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
//   const dayNumber = number - 1;
//   const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//   return days[dayNumber];
// };

// const printDayname = (dayNumber) => {
//   try {
//     console.log(getDayName(dayNumber));
//   } catch (e) {
//     console.log(e.message);
//   }
// };


// printDayname(0);