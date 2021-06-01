$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases",trocaFraseAleatoria)//data tem o retorno da requisição feita pelo $.get

}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.randon() * data.length);
  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase(data[numeroAleatorio].tempo);

}
