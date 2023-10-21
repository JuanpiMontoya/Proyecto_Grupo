import { añadirkata, devolver_ListaKatas } from "./clases_proyecto"

document.addEventListener("DOMContentLoaded", function() {
    const cont_katas = document.querySelector("#katas-disponibles");
    añadirkata("Kata - Calculadora String");
    añadirkata("Kata - Punto de venta kata");
    añadirkata("Kata - Kata bancario");
    let lista_Katas = devolver_ListaKatas();
    lista_Katas.forEach(function(nombre) {
        const contenedorKata = document.createElement("div");
        contenedorKata.className = "contenedor-kata";
        contenedorKata.textContent = nombre;
        cont_katas.appendChild(contenedorKata);
    });
});
