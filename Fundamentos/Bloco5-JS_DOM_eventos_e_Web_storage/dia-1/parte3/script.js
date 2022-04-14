document.getElementById('header-container').style.backgroundColor = "green";

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = "tomato";

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = "yellow";

let mudarTomato = document.querySelectorAll('.emergency-tasks h3');
let mudarYellow = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < mudarTomato.length; index += 1) {
  mudarTomato[index].style.backgroundColor = "purple";
}
for (let index = 0; index < mudarYellow.length; index += 1) {
  mudarYellow[index].style.backgroundColor = "black";
}

document.getElementById('footer-container').style.backgroundColor = "darkgreen";