import ListaDeKatas from "./Lista_Katas.js";

document.addEventListener("DOMContentLoaded", function() {
    const cont_katas = document.querySelector("#katas-disponibles");
    const lista_Katas = new ListaDeKatas();
    //Añadimos los katas y su informacion respectiva 
    lista_Katas.añadirkata("Kata - Calculadora String","Cree una calculadora simple que tome una cadena con hasta dos números, separados por comas, y devuelve un número entero de la operacion especifica","Media");
    const katas_disp = lista_Katas.devolver_ListaKatas();

    //Llenado dinamico del Kata
    katas_disp.forEach(function(kata) {
        const contenedorKata = document.createElement("div");
        contenedorKata.className = "contenedor-kata";

        //añadimos nombre del kata
        const nomKata = document.createElement("h4");
        nomKata.textContent = kata.getNombre();
        
        //añadimos descripcion del kata
        const descripcionKata= document.createElement("p");
        descripcionKata.textContent = kata.getDescripcion();

        const dificultadElement = document.createElement("p");
        dificultadElement.textContent = `Dificultad: ${kata.getDificultad()}`;

        // Agregamos todos los detalles al contenedor del kata
        contenedorKata.appendChild(nomKata);
        contenedorKata.appendChild(descripcionKata);
        contenedorKata.appendChild(dificultadElement);
        cont_katas.appendChild(contenedorKata);
    });
});