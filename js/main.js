document.addEventListener("DOMContentLoaded", function () {
    const parametroA = document.getElementById("paramA");
    const parametroB = document.getElementById("paramB");
    const parametroC = document.getElementById("paramC");
    const resultado = document.getElementById("resultado");
    const calcularBtn = document.getElementById("iniciar");
   
    calcularBtn.addEventListener("click", function () {
        resultado.innerHTML = "";
        const a = parseFloat(parametroA.value);
        const b = parseFloat(parametroB.value);
        const c = parseFloat(parametroC.value);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultado.innerHTML = "valores inválidos.";
            return;
        }
        calcularTempoLavaEuler(a, b, c);
    });


    function calcularTempoLavaEuler(a, b, c) {
        let tAtual = 0.0;
        
        // y = 7.0 * (2.0 - 0.9t)
        tAtual = a * (b - c^8)
        resultado.innerHTML = tAtual
    }

});
