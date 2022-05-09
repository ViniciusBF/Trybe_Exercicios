const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// console.log(customer1);

customer1.lastName = 'Faria';
// console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

// console.log(customer2);
customer2['lastName'] = 'Silva';
// console.log(customer2);

// ***************************************

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
// console.log(customer);

// ***************************************

const film = {
  marvel: 'ultimato',
  dc: 'cavaleiro das trevas',
  scooby: 'monstros a solta',
}

function adicionarObjeto(param1, param2, param3) {
  param1[param2] = param3;
  return param1;
}

console.log(adicionarObjeto(film, 'starWars', 'capitulo 5'));
