const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce( (acc, curr) => acc += curr.split('').filter( (ele) => ele.toUpperCase() === 'A').length, 0 )
}

console.log(containsA());