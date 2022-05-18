const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map( (para, idx) => {
    const nota = grades[idx].reduce( (acc, curr, idx, src) => (idx + 1) === src.length ? (acc + curr) / (idx + 1) : acc + curr);
    return { name: para, average: nota }
  } )
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());
console.log(expected);