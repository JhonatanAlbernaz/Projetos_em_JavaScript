var primeiro_numero = document.getElementById("primeiro_numero");
var segundo_numero = document.getElementById("segundo_numero");
var botao_soma = document.getElementById("botao_soma");
var botao_multiplicar = document.getElementById("botao_multiplicar");
var botao_divisao = document.getElementById("botao_divisao");
var botao_media = document.getElementById("botao_media");
var resultado = document.getElementById("resultado");

botao_soma.onclick = somar;
botao_multiplicar.onclick = multiplicar;
botao_divisao.onclick = divisao;
botao_media.onclick = media;

function somar(e){
  var valor_primeiro_numero = parseInt(primeiro_numero.value);
  var valor_segundo_numero = parseInt(segundo_numero.value);
  var soma = valor_primeiro_numero + valor_segundo_numero;

  resultado.textContent = "A Soma é " + soma;
  console.log(soma);
}

function multiplicar(e) {
    var valor_p_numero = parseInt(primeiro_numero.value);
    var valor_s_numero = parseInt(segundo_numero.value);
    var multiplicar = valor_p_numero * valor_s_numero;

    resultado.textContent = "A Multiplicação é " + multiplicar;
    console.log(multiplicar);
}

function divisao(e) {
    var valor_p = parseInt(primeiro_numero.value);
    var valor_s = parseInt(segundo_numero.value);
    var divisao = valor_p / valor_s;

    resultado.textContent = "A Divisão é " + divisao;
    console.log(divisao);
}

function media(e) {
    var valor_p = parseInt(primeiro_numero.value);
    var valor_s = parseInt(segundo_numero.value);
    var media = (valor_p + valor_s)/2;

    resultado.textContent = "A Média é " + media;
    console.log(media);
}