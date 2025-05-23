document.addEventListener("DOMContentLoaded", function () {
    const parametroA = document.getElementById("paramA");
    const parametroB = document.getElementById("paramB");
    const parametroC = document.getElementById("paramC");
    const resultado = document.getElementById("resultado");
    const calcularBtn = document.getElementById("iniciar");
    const lava = document.getElementById("lava");
   
    calcularBtn.addEventListener("click", function () {
        resultado.innerHTML = "";
        const a = parseFloat(parametroA.value);
        const b = parseFloat(parametroB.value);
        const c = parseFloat(parametroC.value);
        const d = parseFloat(lava.value);
        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
            resultado.innerHTML = "valores inválidos.";
            return;
        }
        calcularTempoLavaEuler(a, b, c, d);
    });


    function calcularTempoLavaEuler(a, b, c, lava) {

    let tempoAtual;
    let posicaoAtualLava;
    let posicaoAlvoLava;
    let passoTempoh;
    let logaritmoNaturalC;
    let fatorAnegativo;
    let baseCexponencial;
    let taxaVariacaoLavadydt;

    tempoAtual = 0.0;
    posicaoAtualLava = a;
    posicaoAlvoLava = lava;
    passoTempoh = 0.0001;
    fatorAnegativo = -1 * a;
    baseCexponencial = c;
    logaritmoNaturalC = Math.log(baseCexponencial);
    resultado.innerHTML = 'Calculando...'
    while (posicaoAtualLava < posicaoAlvoLava) {
        taxaVariacaoLavadydt = fatorAnegativo * Math.pow(baseCexponencial, tempoAtual) * logaritmoNaturalC;
        posicaoAtualLava = posicaoAtualLava + passoTempoh * taxaVariacaoLavadydt;
        tempoAtual = tempoAtual + passoTempoh;
    }

        resultado.innerHTML = tempoAtual
    }

});
/*
algoritmo CalcularTempoAvancoLavaEuler
declare
    tempoAtual: real
    posicaoAtualLava: real
    posicaoAlvoLava: real
    passoTempo_h: real
    logaritmoNatural_C: real
    fatorA_negativo: real 
    baseC_exponencial: real
    taxaVariacaoLava_dydt: real

inicio
    tempoAtual := 0.0
    posicaoAtualLava := 7.0 
    posicaoAlvoLava := 10.0
    passoTempo_h := 0.0001
    fatorA_negativo := -7.0
    baseC_exponencial := 0.9
    logaritmoNatural_C := logN(baseC_exponencial)
    enquanto posicaoAtualLava < posicaoAlvoLava faca
        taxaVariacaoLava_dydt := fatorA_negativo * potencia(baseC_exponencial, tempoAtual) * logaritmoNatural_C
        posicaoAtualLava := posicaoAtualLava + passoTempo_h * taxaVariacaoLava_dydt
        tempoAtual := tempoAtual + passoTempo_h
    fimenquanto
    escreva "Tempo calculado para atingir o alvo: ", tempoAtual, " horas"

fim
*/