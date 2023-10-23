import ListaDeKatas from "./Lista_Katas.js";

document.addEventListener("DOMContentLoaded", function() {
    const cont_katas = document.querySelector("#katas-disponibles");
    const lista_Katas = new ListaDeKatas();

    // Función para crear elementos HTML
    function createElement(tag, textContent) {
        const element = document.createElement(tag);
        if (textContent) {
            element.textContent = textContent;
        }
        return element;
    }

    // Función para agregar katas a la lista
    function addKataToContainer(kata) {
        const contenedorKata = createElement("div");
        contenedorKata.className = "contenedor-kata";

        contenedorKata.appendChild(createElement("h4", kata.getNombre()));
        contenedorKata.appendChild(createElement("p", kata.getDescripcion()));
        contenedorKata.appendChild(createElement("p", `Dificultad: ${kata.getDificultad()}`));

        cont_katas.appendChild(contenedorKata);
    }

    //Añadimos los katas y su informacion respectiva 
    lista_Katas.añadirkata("Kata - Calculadora String","Cree una calculadora simple que tome una cadena con hasta dos números, separados por comas, y devuelve un número entero de la operacion especifica","Media");
    lista_Katas.añadirkata("Kata - Punto de venta kata","Cree una aplicación sencilla para escanear códigos de barras para vender productos.","Fácil");
    lista_Katas.añadirkata("Kata - Kata bancario","Cree una aplicación bancaria sencilla con funciones de depósito, retiro e impresión de estados de cuenta, usando una clase pública, y utilizando cadenas y enteros para fechas y cantidades respectivamente.","Difícil");
    const katas_disp = lista_Katas.devolver_ListaKatas();

    //Llenado dinamico del Kata
    katas_disp.forEach(addKataToContainer);

    const form = document.querySelector("#form_buscar");

    form.addEventListener("submit",(event) => {
        event.preventDefault();
        const busqueda = event.target.elements["busqueda"].value;
        const tipoBusqueda = event.target.elements["tipo_busqueda"].value;

        // Llama al método de busqueda adecuado
        const katasFiltradas = tipoBusqueda === "nombre"
            ? lista_Katas.buscar_Titulo(busqueda)
            : lista_Katas.buscar_Descripcion(busqueda);
            
        // Actualiza la lista solo a los resultados de la búsqueda
        cont_katas.innerHTML  = "";
        katasFiltradas.forEach(addKataToContainer);
    });
});
