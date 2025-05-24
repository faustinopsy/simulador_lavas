export default class DesenhoCanvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.resultadoDisplay = document.getElementById("resultado");
        this.ctx = this.canvas.getContext('2d');
        this.centroVulcao = 220;
        this.baseY = 250;
        this.larguraBaseOffset = 200;
        this.alturaPicoY = 100;

        this.larguraCasa = 80;
        this.alturaCasa = 60;
        this.alturaTeto = 50;
        this.posicaoXVila = this.centroVulcao + 500;
        this.posicaoYCasaTopo = 190;
        
        this.larguraTopoFluxoLava = 20;
        this.larguraBaseFluxoLavaNaEncosta = 30;
        this.espessuraLavaHorizontal = 25;

        this.progressoDescida = 0;
        this.idIntervaloAnimacao = null; 
        this.velocidade = 0.02;
        this.faseAnimacao = 'parada'; 
    }

    desenharCeu() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#ADD8E6';
        this.ctx.fillRect(0, 0, this.canvas.width, this.baseY);
    }

    desenharChao() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(0, this.baseY, this.canvas.width, this.canvas.height - this.baseY);
    }

    desenharVulcao() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#654321';
        this.ctx.beginPath();
        this.ctx.moveTo(this.centroVulcao - this.larguraBaseOffset, this.baseY);
        this.ctx.lineTo(this.centroVulcao, this.alturaPicoY);
        this.ctx.lineTo(this.centroVulcao + this.larguraBaseOffset, this.baseY);
        this.ctx.closePath();
        this.ctx.fill();
    }

    desenharVila() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#3F9977';
        this.ctx.fillRect(this.posicaoXVila, this.posicaoYCasaTopo, this.larguraCasa, this.alturaCasa);
        this.ctx.fillStyle = '#8F0077';
        this.ctx.beginPath();
        this.ctx.moveTo(this.posicaoXVila, this.posicaoYCasaTopo);
        this.ctx.lineTo(this.posicaoXVila + this.larguraCasa / 2, this.posicaoYCasaTopo - this.alturaTeto);
        this.ctx.lineTo(this.posicaoXVila + this.larguraCasa, this.posicaoYCasaTopo);
        this.ctx.closePath();
        this.ctx.fill();
    }

    desenhaLavaDescendo() {
        if (!this.ctx || this.progressoDescida <= 0) return;

        this.ctx.fillStyle = 'orangered';
        this.ctx.beginPath();
        const pPicoX = this.centroVulcao;
        const pPicoY = this.alturaPicoY;
        const pBaseDireitaVulcaoX = this.centroVulcao + this.larguraBaseOffset;
        const pBaseDireitaVulcaoY = this.baseY;
        const yAtualLava = pPicoY + (pBaseDireitaVulcaoY - pPicoY) * this.progressoDescida;
        const xInterpDireita = pPicoX + (pBaseDireitaVulcaoX - pPicoX) * this.progressoDescida;
        const larguraAtualFluxo = this.larguraTopoFluxoLava + 
                                (this.larguraBaseFluxoLavaNaEncosta - this.larguraTopoFluxoLava) * this.progressoDescida;

        const xTopoFluxoEsq = pPicoX - this.larguraTopoFluxoLava / 2;
        const xTopoFluxoDir = pPicoX + this.larguraTopoFluxoLava / 2;
        const xBaseFluxoDirAtual = xInterpDireita; 
        const xBaseFluxoEsqAtual = xInterpDireita - larguraAtualFluxo;

        this.ctx.moveTo(xTopoFluxoEsq, pPicoY);
        this.ctx.lineTo(xTopoFluxoDir, pPicoY);
        this.ctx.lineTo(xBaseFluxoDirAtual, yAtualLava);
        this.ctx.lineTo(xBaseFluxoEsqAtual, yAtualLava);
        
        this.ctx.closePath();
        this.ctx.fill();
    }
    
    desenhaLavaChao() {
        if (!this.ctx || this.progressoDescida < 1 || this.progressoHorizontal <=0) return;

        const xInicio = (this.centroVulcao + this.larguraBaseOffset) - this.larguraBaseFluxoLavaNaEncosta;
        const xFimTotal = this.posicaoXVila;
        const comprimentoTotal = xFimTotal - xInicio;
        const comprimentoAtual = comprimentoTotal * this.progressoHorizontal;

        if (comprimentoAtual > 0) {
            this.ctx.fillStyle = 'orangered';
            this.ctx.fillRect(
                xInicio,
                this.baseY - this.espessuraLavaHorizontal,
                comprimentoAtual,
                this.espessuraLavaHorizontal
            );
        }
    }

    limparCanvas() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    desenhar() {
        if (!this.ctx) return;
        this.limparCanvas();
        this.desenharCeu();
        this.desenharChao();
        this.desenharVulcao();
        this.desenharVila();
        this.desenhaLavaDescendo();
        this.desenhaLavaChao(); 
    }

    atualizaAnimacao(objeto) {
        let pararIntervaloLocal = false;

        if (this.faseAnimacao === 'descendo') {
            this.progressoDescida += this.velocidade;
            if (this.progressoDescida >= 1) {
                this.progressoDescida = 1;
                this.faseAnimacao = 'horizontal';
            }
        } else if (this.faseAnimacao === 'horizontal') {
            this.progressoHorizontal += this.velocidade;
            if (this.progressoHorizontal >= 1) {
                this.progressoHorizontal = 1;
                this.faseAnimacao = 'concluida';
                pararIntervaloLocal = true;
            }
        }
        
        this.desenhar();
        this.resultadoDisplay.innerHTML = 'Calculando...'
        if (pararIntervaloLocal) {
            clearInterval(this.idIntervaloAnimacao);
            this.idIntervaloAnimacao = null;
            this.resultadoDisplay.innerHTML = `Tempo para atingir ${objeto.posicaoAlvoLava.toFixed(2)}: ${objeto.tempoAtual.toFixed(4)} horas`;
        }  
        
    }

    iniciarAnimacaoLava(calcularTempoLavaEuler, d) {
        let tempoAtual = d * 5;
        let objeto = true
        if (this.idIntervaloAnimacao) return; 
        this.progressoDescida = 0;
        this.progressoHorizontal = 0;
        this.faseAnimacao = 'descendo';
        this.desenhar(); 
        objeto = calcularTempoLavaEuler();
        this.idIntervaloAnimacao = setInterval(() => {
          this.atualizaAnimacao(objeto);
        }, tempoAtual); 
    }

    pararAnimacaoLava() {
         if (this.idIntervaloAnimacao) {
            clearInterval(this.idIntervaloAnimacao);
            this.idIntervaloAnimacao = null;
            this.faseAnimacao = 'parada';
        }
    }
}