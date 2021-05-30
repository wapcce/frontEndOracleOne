function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody"); //Busca um tbody dentro de placar
  var usuario = "Douglas";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario,numPalavras);
  linha.find(".botao-remover").click(removeLinha);
  corpoTabela.append(linha);//com o append é adicionado no final
  //se fosse com o prepend seria adicioando no inicio

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
  $(this).parent().parent().remove();
}
