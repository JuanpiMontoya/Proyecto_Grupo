import ListaDeKatas from "./clases_proyecto.js";


document.addEventListener("DOMContentLoaded", function() {
    const cont_katas = document.querySelector("#katas-disponibles");
    const lista_Katas = new ListaDeKatas();
    lista_Katas.añadirkata("Kata - Calculadora String");
    lista_Katas.añadirkata("Kata - Punto de venta kata");
    lista_Katas.añadirkata("Kata - Kata bancario");
    lista_Katas.devolver_ListaKatas().forEach(function(nombre) {
        const contenedorKata = document.createElement("div");
        contenedorKata.className = "contenedor-kata";
        contenedorKata.textContent = nombre;
        cont_katas.appendChild(contenedorKata);
    });
});
