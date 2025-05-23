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

        tempoAtual = 0.0;
        posicaoAtualLava = a;
        posicaoAlvoLava = d;
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

        this.resultado.innerHTML = tempoAtual
    }
}