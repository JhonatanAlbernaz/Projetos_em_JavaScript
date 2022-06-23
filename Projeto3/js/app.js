var primeiro = document.getElementById('primeiro');
var segundo = document.getElementById('segundo');
var terceiro = document.getElementById('terceiro');
var quarto = document.getElementById('quarto');
var quinto = document.getElementById('quinto');
var botao_executar = document.getElementById('executar');
var resultado = document.getElementById('resultado');

botao_executar.onclick = executar;

function executar(e) {
  var v_primeiro = parseInt(primeiro.value);
  var v_segundo = parseInt(segundo.value);
  var v_terceiro = parseInt(terceiro.value);
  var v_quarto = parseInt(quarto.value);
  var v_quinto = parseInt(quinto.value);

  var soma = v_primeiro + v_segundo + v_terceiro + v_quarto + v_quinto;
  var quadrado = soma * soma;

  resultado.textContent = "O Quadrado desses números é " + quadrado;

  console.log(quadrado);
}