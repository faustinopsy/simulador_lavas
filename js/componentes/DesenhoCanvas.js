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
        this.distanciVulcao = this.centroVulcao + 500;
        this.posicaoY = 190;
        
    }

    desenharCeu() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#ADD8E6';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height - 50);
    }

    desenharChao() {
        console.log("Desenhando no canvas");
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(0, 250, this.canvas.width, 200);
    }

    desenharVulcao() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#654321';
        this.ctx.beginPath();
        this.ctx.moveTo(this.centroVulcao - this.larguraBase , this.baseY);
        this.ctx.lineTo(this.centroVulcao, this.altura);
        this.ctx.lineTo(this.centroVulcao + this.larguraBase , this.baseY);
        this.ctx.closePath();
        this.ctx.fill();
    }

    desenharVila() {
        if (!this.ctx) return;

        this.ctx.fillStyle = '#3F9977';
        this.ctx.fillRect(this.distanciVulcao, this.posicaoY, this.larguraCasa, this.alturaCasa);
        this.ctx.fillStyle = '#8F0077';
        this.ctx.beginPath();
        this.ctx.moveTo(this.distanciVulcao, this.posicaoY);
        this.ctx.lineTo(this.distanciVulcao + this.larguraCasa / 2, this.posicaoY - this.alturaTeto);
        this.ctx.lineTo(this.distanciVulcao + this.larguraCasa, this.posicaoY);
        this.ctx.closePath();
        this.ctx.fill();
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
    }
   
}