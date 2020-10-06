const utterance = new SpeechSynthesisUtterance();
let velocity = document.getElementById("txt-velocity");

/*Definindo a linguagem.*/
utterance.lang = 'pt-BR';

/*Texto inicial.*/
utterance.text = "Digite seu texto aqui.";

/*Definindo velocidade inicial.*/
utterance.rate = 1;

/*Função para fazer a leitura.*/
function speak() {
  speechSynthesis.speak(utterance);
}

/*Função para parar a leitura.*/
function stop() {
  speechSynthesis.cancel();
}

/*Função para definir o texto que será lido.*/
function setText(event) {
  utterance.text = event.target.innerText;
}

/*Função para modificar a velocidade da leitura.*/
function setVelocity(value) {
  utterance.rate = value;
  velocity.innerText = `Velocidade: ${value}`; /*Editar o label.*/
}