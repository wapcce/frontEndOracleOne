var frase = $(".frase").text();//função que seleciona no html + o .text() que
//pega o conteudo
var numPalavras = frase.split(" ").length();//cria um array separado por espaço
var tamanhoFrase = $("#tamanho-frase").text();

tamanhoFrase.text(numPalavras);//agora estou colocando um valor no conteudo
