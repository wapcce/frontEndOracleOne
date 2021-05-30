var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function() {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botao-reiniciar").click(reiniciaJogo);
  inicializaMarcadores();
  noPasteDrop();


});

function noPasteDrop() {
  campo.attr("onpaste" ,"return false");//não deixa colar
  campo.attr("ondrop" ,"return false");//não deixar arrastar para dentro

};

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();//função que seleciona no html + o .text() que
  //pega o conteudo
  var numPalavras = frase.split(" ").length;//cria um array separado por espaço
  var tamanhoFrase = $("#tamanho-frase");

  tamanhoFrase.text(numPalavras);//agora estou colocando um valor no conteudo


}


function inicializaContadores() {
  campo.on("input",function(){
    var conteudo = campo.val();//val() é o mesmo value
    var qtdPalavra = conteudo.split(/\S+/).length -1;
    //expressão regular que busca
    //console.log(qtdPalavra);
  //qualquer tipo de espaço vazio
    $("#contador-palavras").text(qtdPalavra);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);


  });//função on nesse caso significa quando
    //clicar fazer alguma coisa, ou seja no evento de click faz algo


}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus",function() { //one funciona somente uma vez
    var cronometroID = setInterval(function () {
      tempoRestante--;
      $("#botao-reiniciar").attr("disabled",true);
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled" ,true); //muda o atributo do campo
        clearInterval(cronometroID);//cronometroID é o id da setInterval toda setInterval retorna seu ID
        $("#botao-reiniciar").attr("disabled", false);
        campo.toggleClass("campo-desativado"); //se tiver classe ele tira se não faz o inverso
      }
    },1000);


  });

}

function inicializaMarcadores() {
  var frase = $(".frase").text();
  campo.on("input",function () {
    var digitado = campo.val();
    var comparavel = frase.substr(0,digitado.length);
    if(digitado == comparavel) {
    campo.addClass("borda-verde");
    campo.removeClass("borda-vermelha");
} else {
    campo.addClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

  });

}


/*$("#botao-reiniciar").on("click",function () {


});
pode ser usada essa como a seguinte dá no mesmo
*/

function reiniciaJogo() {
  campo.attr("disabled" ,false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.removeClass("campo-desativado");
  campo.removeClass("borda-vermelha");
  campo.removeClass("borda-verde");
}
