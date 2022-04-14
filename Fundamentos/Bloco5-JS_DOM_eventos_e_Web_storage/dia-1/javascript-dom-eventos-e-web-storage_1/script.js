/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3 Crie uma função que mude a cor do quadrado vermelho para branco.
 4 Crie uma função que corrija o texto da tag <h1>.
 5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
function mudarTexto() {
  let mudar = document.getElementsByTagName('p');
  for (let i = 0; i < mudar.length; i += 1) {
    mudar[i].innerText = 'trabalhando';
  }
  return mudar;
}
mudarTexto();

function mudarCorAmarela() {
  let mudar = document.getElementsByClassName('main-content');
  mudar[0].style.backgroundColor = "rgb(76,164,109)";
  return mudar;
}
mudarCorAmarela();

function mudarCorVermelha() {
  let mudar = document.getElementsByClassName('center-content');
  mudar[0].style.backgroundColor = "white";
  return mudar;
}
mudarCorVermelha();

function mudarTitulo() {
  let mudar = document.getElementsByClassName('title');
  mudar[0].innerText = 'Exercício 5.1 - JavaScript'
  return mudar;
}
mudarTitulo();

function upperCase() {
  let mudar = document.getElementsByTagName('p');
  for (let i = 0; i < mudar.length; i += 1) {
    mudar[i].innerText = mudar[i].innerText.toUpperCase();
  }
  return mudar;
}
upperCase();

function exibir() {
  let mostrar = document.getElementsByTagName('p');
  for (let i = 0; i < mostrar.length; i += 1) {
    console.log(mostrar[i]);
  }
  return mostrar;
}
exibir();