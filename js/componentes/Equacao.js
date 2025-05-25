export default class Equacao{
    constructor(){
        this.tempoAtual;
        this.posicaoAtualLava;
        this.posicaoAlvoLava;
        this.passoTempoh;
        this.logaritmoNaturalC;
        this.fatorAnegativo;
        this.baseCexponencial;
        this.taxaVariacaoLavadydt;
        
        this.maxIteracoes = 5000000;
        this.iteracoes = 0;
    }

    iniciaVariaveis(a, b, c, d){
        this.tempoAtual = 0.0;
        this.posicaoAtualLava = a;
        this.posicaoAlvoLava = d;
        this.passoTempoh = d / 1070;
        this.fatorAnegativo = -1 * a;
        this.baseCexponencial = c;
        this.logaritmoNaturalC = Math.log(this.baseCexponencial);
    }

    calcularTempoLavaEuler() {

        if (this.posicaoAtualLava < this.posicaoAlvoLava && this.iteracoes < this.maxIteracoes) {
            this.taxaVariacaoLavadydt = this.fatorAnegativo * Math.pow(this.baseCexponencial, this.tempoAtual) * this.logaritmoNaturalC;
            this.posicaoAtualLava = this.posicaoAtualLava + this.passoTempoh * this.taxaVariacaoLavadydt;
            this.tempoAtual = this.tempoAtual + this.passoTempoh;
            this.iteracoes++;
       }
        
        if (this.posicaoAtualLava > this.posicaoAlvoLava) {
            return {
                "rodando": false,
                "tempoAtual": this.tempoAtual,
                "posicaoAlvoLava": this.posicaoAlvoLava
            }
        } 
        else {
            return {
                "rodando": true,
                "tempoAtual": this.tempoAtual,
                "posicaoAlvoLava": this.posicaoAlvoLava
            }
        }
       
    }
}