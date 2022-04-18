let ondeEstou = document.getElementById('elementoOndeVoceEsta');
ondeEstou.parentNode.style.color = 'red';

let primeiroFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilho.innerText = 'PrimeiroFilho do Filho';

let quatro = document.getElementById('pai').firstElementChild;
quatro.innerText = 'tarefa 4';

ondeEstou.previousElementSibling.style.backgroundColor = 'green';

ondeEstou.nextSibling.textContent = 'blue';

ondeEstou.nextElementSibling.innerText = 'tarefa 7';

let pai = document.getElementById('pai');
pai.children[2].innerText = 'tarefa 8';
//parte 2
let criacao = document.createElement('div');
criacao.innerText = 'Irmão';
pai.appendChild(criacao);

let criacaoFilho = document.createElement('div')
criacaoFilho.innerText = 'filho do elemento';
ondeEstou.appendChild(criacaoFilho);

let criandoFilhoProFilho = criacao;
criandoFilhoProFilho.innerText = 'filho do filho do filho';
criandoFilhoProFilho.className = 'buscar'
primeiroFilho.appendChild(criandoFilhoProFilho);

let filho3 = document.getElementsByClassName('buscar')[0];
filho3.parentElement.parentElement.nextElementSibling.innerText = 'exercicio parte 2 final'

pai.removeChild(pai.firstElementChild);
pai.removeChild(pai.children[1]);
pai.removeChild(pai.childNodes[3]);
pai.removeChild(pai.children[1]);
pai.removeChild(pai.lastChild);

ondeEstou.removeChild(ondeEstou.children[1]);
ondeEstou.removeChild(ondeEstou.children[1]);

primeiroFilho.removeChild(primeiroFilho.children[0]);