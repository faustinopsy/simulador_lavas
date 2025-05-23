class Equacao{
    constructor(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.resultado = document.getElementById("resultado");
    }

    calcularTempoLavaEuler() {

        let tempoAtual;
        let posicaoAtualLava;
        let posicaoAlvoLava;
        let passoTempoh;
        let logaritmoNaturalC;
        let fatorAnegativo;
        let baseCexponencial;
        let taxaVariacaoLavadydt;

        tempoAtual = 0.0;
        posicaoAtualLava = this.a;
        posicaoAlvoLava = lava;
        passoTempoh = 0.0001;
        fatorAnegativo = -1 * this.a;
        baseCexponencial = this.c;
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