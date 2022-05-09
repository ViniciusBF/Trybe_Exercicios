const botao = document.getElementById('button');
const paragrafo = document.getElementById('count');
let clickCount = 0;

botao.addEventListener('click', () => paragrafo.innerText = (clickCount += 1))