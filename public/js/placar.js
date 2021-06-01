$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody"); //Busca um tbody dentro de placar
  var usuario = "Douglas";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario,numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);//com o append é adicionado no final
  //se fosse com o prepend seria adicioando no inicio
$(".placar").slideDown(500);//quando termina a partida ele mostra o placar
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top; //dá a posição com relação ao topo de placar
    $("body").animate( //faz animação para descer a página
    {
      scrollTop: posicaoPlacar+"px"

    },1000)

}

function novaLinha(usuario,palavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href","#");
  var icone = $("<i>").addClass("small material-icons").text("delete");

  link.append(icone);

  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);
  console.log(linha);

  return linha;
}

function removeLinha() {
  event.preventDefault();
  var linha = $(this).parent().parent();
  linha.fadeOut(1000);
  setTimeout(function () {
    linha.remove();
  },1000);
}

function mostraPlacar() {
  //$(".placar").css("display","block")//tem .show e .hide do jquery que faz isso também tem a toggle
  $(".placar").stop().slideToggle(800);//.stop() é se for clicado varias vezes lo lugar de acumular clickcs ele para e passa para o próximo
}
