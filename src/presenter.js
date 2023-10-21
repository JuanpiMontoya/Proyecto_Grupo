import añadirkata from "./clases_proyecto"

document.addEventListener("DOMContentLoaded", function() {
    const cont_katas = document.querySelector("#katas-disponibles");
    const kata1 = añadirkata("Kata - Calculadora String")
    const contenedorKata = document.createElement("div");
    contenedorKata.className = "contenedor-kata";
    contenedorKata.textContent = kata1;
    cont_katas.appendChild(contenedorKata);
});
