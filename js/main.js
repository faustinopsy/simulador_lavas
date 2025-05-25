import Inputs from "./componentes/Inputs.js";
import Equacao from "./componentes/Equacao.js";
import DesenhoCanvas from "./componentes/DesenhoCanvas.js";

const canvas = document.getElementById('canvasSimulador');
const desenho = new DesenhoCanvas(canvas);
desenho.desenhar();

const equacao = new Equacao();
const input = new Inputs();
input.capturarValores( 
    equacao.iniciaVariaveis.bind(equacao),
    equacao.calcularTempoLavaEuler.bind(equacao),
    desenho.iniciarAnimacaoLava.bind(desenho),
    desenho.posicaoAlvoLava.bind(desenho)
);