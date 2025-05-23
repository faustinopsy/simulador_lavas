export default class DesenhoCanvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.ctx = this.canvas.getContext('2d');
        this.desenharChao();
        this.desenharCeu();
        this.centroVulcao = 220;
        this.baseY = 250;
        this.larguraBase = 200;
        this.altura = 100;
        this.desenharVulcao() 
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

   
}