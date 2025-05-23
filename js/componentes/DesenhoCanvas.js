export default class DesenhoCanvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.ctx = this.canvas.getContext('2d');
        this.desenhar();
    }

    desenhar() {
        console.log("Desenhando no canvas");
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(0, 250, this.canvas.width, 200);
    }

   
}