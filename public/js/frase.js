$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $("#spinner").show();
  $.get("http://localhost:3000/frases",trocaFraseAleatoria)//data tem o retorno da requisição feita pelo $.get
  .fail(function() {//.fail trata o erro que é retornado
    $("#erro").show();
    setTimeout(function() {
      $("#erro").toggle();
    },2000);
  })
  .always(function() {
    $("#spinner").toggle();
  });
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var random = Math.random();
  var numeroAleatorio = Math.floor(random * data.length);
  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);

}
