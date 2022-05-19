// Faça uma lista com as suas frutas favoritas
const specialFruit = ['alface', 'cebola', 'tomate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['vinagre', 'azeite', 'sal'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));