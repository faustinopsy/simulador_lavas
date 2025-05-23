import Inputs from "./componentes/Inputs.js";
import Equacao from "./componentes/Equacao.js";
import DesenhoCanvas from "./componentes/DesenhoCanvas.js";

const canvas = document.getElementById('canvasSimulador');

const equacao = new Equacao();
const input = new Inputs();
input.capturarValores(equacao.calcularTempoLavaEuler.bind(equacao));

const desenho = new DesenhoCanvas(canvas);
desenho.desenhar();