export default class DesenhoCanvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.ctx = this.canvas.getContext('2d');
        this.centroVulcao = 220;
        this.baseY = 250;
        this.larguraBase = 200; 
        this.altura = 100; 

        this.larguraCasa = 80;
        this.alturaCasa = 60;
        this.alturaTeto = 50;
        this.posicaoXVila = this.centroVulcao + 500;
        this.posicaoYCasaTopo = 190; 
        
        this.larguraTopoFluxoLava = 20; 
        this.larguraBaseFluxoLavaNaEncosta = 30; 
        this.espessuraLavaHorizontal = 25; 
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
        this.ctx.moveTo(this.centroVulcao - this.larguraBase, this.baseY);
        this.ctx.lineTo(this.centroVulcao, this.altura);
        this.ctx.lineTo(this.centroVulcao + this.larguraBase, this.baseY);
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
        if (!this.ctx) return;
        this.ctx.fillStyle = 'orangered';
        this.ctx.beginPath();
        const pontoPicoX = this.centroVulcao;
        const pontoPicoY = this.altura;
        const pontoBaseDireitaVulcaoX = this.centroVulcao + this.larguraBase;
        const pontoBaseDireitaVulcaoY = this.baseY;
        this.ctx.moveTo(pontoPicoX - this.larguraTopoFluxoLava / 2, pontoPicoY);
        this.ctx.lineTo(pontoPicoX + this.larguraTopoFluxoLava / 2, pontoPicoY);
        this.ctx.lineTo(pontoBaseDireitaVulcaoX, pontoBaseDireitaVulcaoY);
        this.ctx.lineTo(pontoBaseDireitaVulcaoX - this.larguraBaseFluxoLavaNaEncosta, pontoBaseDireitaVulcaoY);
        this.ctx.closePath();
        this.ctx.fill();
    }

    desenhaLavaChao() {
        if (!this.ctx) return;

        const xInicioLavaHorizontal = this.centroVulcao + this.larguraBase - this.larguraBaseFluxoLavaNaEncosta;
        const xFimLavaHorizontal = this.posicaoXVila;
        const larguraLavaHorizontal = xFimLavaHorizontal - xInicioLavaHorizontal;

        if (larguraLavaHorizontal > 0) {
            this.ctx.fillStyle = 'orangered';
            this.ctx.fillRect(
                xInicioLavaHorizontal,
                this.baseY - this.espessuraLavaHorizontal,
                larguraLavaHorizontal,
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
}