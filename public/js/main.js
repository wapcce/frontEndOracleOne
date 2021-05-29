var frase = $(".frase").text();//função que seleciona no html + o .text() que
//pega o conteudo
var numPalavras = frase.split(" ").length;//cria um array separado por espaço
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);//agora estou colocando um valor no conteudo

var campo = $(".campo-digitacao");
campo.on("input",function(){
  var conteudo = campo.val();//val() é o mesmo value
  var qtdPalavra = conteudo.split(/\S+/).length -1;
  //expressão regular que busca
  console.log(qtdPalavra);
//qualquer tipo de espaço vazio
  $("#contador-palavras").text(qtdPalavra);

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);


});//função on nesse caso significa quando
  //clicar fazer alguma coisa, ou seja no evento de click faz algo
var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function() { //one funciona somente uma vez
  var cronometroID = setInterval(function () {
    tempoRestante--;
    $("#tempo-digitacao").text(tempoRestante);
    if (tempoRestante < 1) {
      campo.attr("disabled" ,true); //muda o atributo do campo
      clearInterval(cronometroID);//cronometroID é o id da setInterval toda setInterval retorna seu ID
    }
  },1000);

});
