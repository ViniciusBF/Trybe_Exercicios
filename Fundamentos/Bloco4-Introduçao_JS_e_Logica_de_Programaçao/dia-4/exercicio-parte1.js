// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda, ' + info.personagem);

// ----------------------- FIM DO EXERCICIO 1

// info.recorrente = 'Sim';
// console.log(info);

// ----------------------- FIM DO EXERCICIO 2

// for(let key in info) {
//   console.log(key)
// }

// ----------------------- FIM DO EXERCICIO 3

// for(let key in info) {
//   console.log(info[key])
// }

// ----------------------- FIM DO EXERCICIO 4

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (let key in info) {
//   if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[key] + ' e ' + info2[key]);
//   }
// }

// ----------------------- FIM DO EXERCICIO 5

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor['nome'] + " " + leitor['sobrenome'] + " se chama '" + leitor['livrosFavoritos'][0]['titulo'] + "'.")

// ----------------------- FIM DO EXERCICIO 6

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
},)

// ----------------------- FIM DO EXERCICIO 7

console.log(leitor['nome'] + " tem " + leitor['livrosFavoritos'].length + " livros favoritos.");

// ----------------------- FIM DO EXERCICIO 8