export default class DesenhoCanvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.ctx = this.canvas.getContext('2d');
        this.desenharChao();
        this.desenharCeu();
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


   
}