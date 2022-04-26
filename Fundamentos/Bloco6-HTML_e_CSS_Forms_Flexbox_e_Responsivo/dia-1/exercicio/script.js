const botaoEnviar = document.getElementById('enviar');
const checkOn = document.getElementById('check2');
const email = document.getElementById('email');
const nome = document.getElementById('nome');

function prevenirEvento(event) {
  event.preventDefault;
}

function habilitarBotao() {
  if (checkOn.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

function check() {
  console.log(email, nome)
  if (email.value.length >= 10 && nome.value.length >= 10) {
    if(email.value.length <= 50 && nome.value.length <= 40) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else {
      alert('Dados Inválidos')
    }
  } else {
    alert('Dados Inválidos')
  }
}

checkOn.addEventListener('click', habilitarBotao);
botaoEnviar.addEventListener('click', prevenirEvento);
botaoEnviar.addEventListener('click', check);