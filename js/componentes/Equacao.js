export default class Equacao{
    constructor(){
        this.resultado = document.getElementById("resultado");
    }

    calcularTempoLavaEuler(a, b, c, d) {
        let tempoAtual;
        let posicaoAtualLava;
        let posicaoAlvoLava;
        let passoTempoh;
        let logaritmoNaturalC;
        let fatorAnegativo;
        let baseCexponencial;
        let taxaVariacaoLavadydt;

        let maxIteracoes = 5000000;
        let iteracoes = 0;

        tempoAtual = 0.0;
        posicaoAtualLava = a;
        posicaoAlvoLava = d;
        passoTempoh = 0.0001;
        fatorAnegativo = -1 * a;
        baseCexponencial = c;
        logaritmoNaturalC = Math.log(baseCexponencial);
        resultado.innerHTML = 'Calculando...'
        while (posicaoAtualLava < posicaoAlvoLava && iteracoes < maxIteracoes) {
            taxaVariacaoLavadydt = fatorAnegativo * Math.pow(baseCexponencial, tempoAtual) * logaritmoNaturalC;
            posicaoAtualLava = posicaoAtualLava + passoTempoh * taxaVariacaoLavadydt;
            tempoAtual = tempoAtual + passoTempoh;
            iteracoes++;
        }

        if (iteracoes >= maxIteracoes) {
            this.resultadoDisplay.innerHTML = `Cálculo interrompido (limite de iterações). t=${tempoAtual.toFixed(4)}`;
        } else {
            this.resultadoDisplay.innerHTML = `Tempo para atingir ${alvo.toFixed(2)}: ${tempoAtual.toFixed(4)} horas`;
        }
    }
}