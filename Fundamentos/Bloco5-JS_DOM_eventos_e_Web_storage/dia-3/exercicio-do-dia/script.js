function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function dias() {
  let diasDoMes = document.getElementById("days");
  let sexta = 5;

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let days = dezDaysList[i];
    let listaDias = document.createElement("li");
    listaDias.classList = "day";
    listaDias.innerHTML = days;

    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      listaDias.classList.add("holiday");
    }

    if (i === sexta) {
      listaDias.classList.add("friday");
      sexta = sexta + 7;
    }

    diasDoMes.appendChild(listaDias);
  }
}
dias();

function botaoFeriado(param1) {
  let buttonContainer = document.getElementsByClassName("buttons-container")[0];
  let newButton = document.createElement("button");
  newButton.innerText = param1;
  newButton.setAttribute("id", "btn-holiday");
  buttonContainer.appendChild(newButton);
}
botaoFeriado("Feriados");

function colorFeriados() {
  let diasFeriados = document.getElementsByClassName("holiday");
  let resultado = window.getComputedStyle(diasFeriados[0], null).getPropertyValue('background-color');
  if (resultado === "rgb(0, 128, 0)") {
    for (let i = 0; i < diasFeriados.length; i += 1) {
      diasFeriados[i].style.backgroundColor = "rgb(238,238,238)";
    }
  } else {
    for (let i = 0; i < diasFeriados.length; i += 1) {
      diasFeriados[i].style.backgroundColor = "green";
    }
  }
}
let feriados = document.getElementById("btn-holiday");
feriados.addEventListener("click", colorFeriados);

function botaoSexta(param1) {
  let buttonContainer = document.getElementsByClassName("buttons-container")[0];
  let newButton = document.createElement("button");
  newButton.innerText = param1;
  newButton.setAttribute("id", "btn-friday");
  buttonContainer.appendChild(newButton);
}
botaoSexta("Sexta-Feira");

function mudarSexta() {
  let diasSexta = document.getElementsByClassName("friday");
  if (diasSexta[0].innerText === '4') {
    for (let i = 0; i < diasSexta.length; i += 1) {
      diasSexta[i].innerText = 'SEXTOU!!!';
    }
  } else {
    for (let i = 4; i < dezDaysList.length - 2; i += 7) {
      let lis = document.querySelectorAll('#days li');
      lis[i + 1].innerText = `${i}`;
    }
  }
}
let sexta = document.getElementById("btn-friday");
sexta.addEventListener("click", mudarSexta);

function zoom() {
  event.target.style.fontSize = "35px";
}
function zoomOut() {
  event.target.style.fontSize = "20px";
}
let lista = document.querySelectorAll('.day');
for (let index = 0; index < lista.length; index += 1) {
  lista[index].addEventListener('mouseenter', zoom);
  lista[index].addEventListener('mouseleave', zoomOut);
  lista[index].addEventListener('click', colorDays);
}

function criarTarefa(param1) {
  let tarefa = document.getElementsByClassName("my-tasks")[0];
  let newTask = document.createElement("span");
  newTask.innerText = param1;
  tarefa.appendChild(newTask);
}
criarTarefa("Cozinhar");

function criarCorTarefa(param1) {
  let tarefa = document.getElementsByClassName("my-tasks")[0];
  let newTaskColor = document.createElement("div");
  newTaskColor.className = 'task';
  newTaskColor.style.backgroundColor = param1;
  tarefa.appendChild(newTaskColor);
}
criarCorTarefa("orange");

function taskSelected() {
  if (event.target.className === 'task') {
    event.target.classList.add('selected');
  } else {
    event.target.classList = 'task';
  }
}
let allTasks = document.querySelectorAll('.task');
for (let index = 0; index < allTasks.length; index += 1) {
  allTasks[index].addEventListener('click', taskSelected);
}

function colorDays() {
  let selectedTask = document.querySelectorAll('.selected');
  let tarefaColor = window.getComputedStyle(selectedTask[0], null).getPropertyValue('background-color');
  let comparacao = window.getComputedStyle(event.target, null).getPropertyValue('Color');
  if (comparacao === tarefaColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = tarefaColor;
  }
}