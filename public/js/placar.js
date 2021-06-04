$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizarPlacar);

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
  console.log("linhas"+linha);
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
  //console.log(linha);

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
function sincronizarPlacar() {
  console.log("entrou no sync");
  var placar =[];
  console.log("placar"+placar);
  var linhas = $("tbody>tr");//todas as tr filhos direto do tbody

  linhas.each(function () {
    var usuario = $(this).find("td")[0].outerText;//primeiro td filho do this que é o tr
    var palavras = $(this).find("td")[1].outerText;//segundo td filho do this que é o tr
    //var usuario = $(this).find("td:nth-child(1)").text;//primeiro td filho do this que é o tr
    //var palavras = $(this).find("td:nth-child(2)").text;//segundo td filho do this que é o tr

    var score = {
      usuario: usuario,
      pontos: palavras
    };
    //console.log(score);
    placar.push(score);
    //console.log(placar);
  });
  var dados = {
     placar
  };
  console.log(dados);
  $.post("http://localhost:3000/placar",dados,function() {
    console.log("Dados injetados");
  });
}


function atualizaPlacar() {
  $.get("http://localhost:3000/placar",function (data) {
    $(data).each(function () {
      var linha = novaLinha(this.usuario,this.pontos);
      linha.find(".botao-remover").click(removeLinha);
      $("tbody").append(linha);

    });
  });

}
