// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevenirEvento(event) {
  if (event.key === 'A') {
    
  } else {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', prevenirEvento);
INPUT_CHECKBOX.addEventListener('click', prevenirEvento);
INPUT_TEXT.addEventListener('keypress', prevenirEvento);