let font1 = document.getElementById("font");
let color1 = document.getElementById("color");
let background1 = document.getElementById("background");
let fontSize1 = document.getElementById("font-size");
let line1 = document.getElementById("line");
let texto = document.getElementsByClassName("paragrafo");
let body = document.body;

function font() {
  let param1 = event.target.value;
  let key = event.key;
  if (key == "Enter") {
    for (let i = 0; i < texto.length; i += 1) {
      texto[i].style.fontFamily = param1;
    }
    localStorage.setItem("font", param1);
  }
}
font1.addEventListener("keydown", font);

function color() {
  let param1 = event.target.value;
  let key = event.key;
  if (key == "Enter") {
    for (let i = 0; i < texto.length; i += 1) {
      texto[i].style.color = param1;
    }
    localStorage.setItem("color", param1);
  }
}
color1.addEventListener("keydown", color);

function background() {
  let param1 = event.target.value;
  let key = event.key;
  if (key == "Enter") {
    body.style.backgroundColor = param1;
    localStorage.setItem("background", param1);
  }
}
background1.addEventListener("keydown", background);

function fontS() {
  let param1 = `${event.target.value}px`;
  let key = event.key;
  if (key == "Enter") {
    for (let i = 0; i < texto.length; i += 1) {
      texto[i].style.fontSize = param1;
    }
    localStorage.setItem("fontSize", param1);
  }
}
fontSize1.addEventListener("keydown", fontS);

function line() {
  let param1 = `${event.target.value}px`;
  let key = event.key;
  if (key == "Enter") {
    for (let i = 0; i < texto.length; i += 1) {
      texto[i].style.lineHeight = param1;
    }
    localStorage.setItem("line", param1);
  }
}
line1.addEventListener("keydown", line);

window.onload = iniciar();

function iniciar() {
  if (localStorage.getItem("font") != undefined) {
    for (let i = 0; i < texto.length; i += 1) {
      texto[i].style.fontFamily = localStorage.getItem("font");
    }
  }
  if (localStorage.getItem("color") != undefined) {
    for (let i = 0; i < texto.length; i += 1) {
      texto[i].style.color = localStorage.getItem("color");
    }
  }
  if (localStorage.getItem("background") != undefined) {
    body.style.backgroundColor = localStorage.getItem("background");
  }
}
if (localStorage.getItem("fontSize") != undefined) {
  for (let i = 0; i < texto.length; i += 1) {
    texto[i].style.fontSize = localStorage.getItem("fontSize");
  }
}
if (localStorage.getItem("line") != undefined) {
  for (let i = 0; i < texto.length; i += 1) {
    texto[i].style.lineHeight = localStorage.getItem("line");
  }
}
