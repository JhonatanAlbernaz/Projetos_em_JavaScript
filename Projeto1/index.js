var ladoDoQuadrado = document.getElementById('lado');
var botaoCacular = document.getElementById('calcular');
var resultado = document.getElementById('resultado');

botaoCacular.onclick = calcular;

function calcular(e) {
    var valorDoLadoDoQuadrado = parseFloat(ladoDoQuadrado.value);

    if(valorDoLadoDoQuadrado <= 0) {
        resultado.textContent = "O valor inserido é inválido";
    }else {
        var areaDoQuadrado = valorDoLadoDoQuadrado * valorDoLadoDoQuadrado;
        var dobroDaAreaDoQuadrado = areaDoQuadrado * 2;
        resultado.textContent = "O dobro da área corresponde a " + dobroDaAreaDoQuadrado;
    }
}