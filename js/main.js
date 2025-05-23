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
        resultado.innerHTML = a + b + c
    });

});
