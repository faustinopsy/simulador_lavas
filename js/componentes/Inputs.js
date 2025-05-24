export default class Inputs {
  constructor() {
    this.parametroA = document.getElementById("paramA");
    this.parametroB = document.getElementById("paramB");
    this.parametroC = document.getElementById("paramC");
    this.resultado = document.getElementById("resultado");
    this.calcularBtn = document.getElementById("iniciar");
    this.lava = document.getElementById("lava");
  }
  capturarValores(calcularTempoLavaEuler, iniciarAnimacaoLava) {
    this.calcularBtn.addEventListener("click", () => {
      this.resultado.innerHTML = "";
      const a = parseFloat(this.parametroA.value);
      const b = parseFloat(this.parametroB.value);
      const c = parseFloat(this.parametroC.value);
      const d = parseFloat(this.lava.value);
      if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        this.resultado.innerHTML = "valores inválidos.";
        return;
      }
        iniciarAnimacaoLava();
        calcularTempoLavaEuler(a, b, c, d);
    });
  }

  render() {
    return this.input;
  }
}