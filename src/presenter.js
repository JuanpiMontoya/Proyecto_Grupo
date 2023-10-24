import ListaDeKatas from "./Lista_Katas.js";
import Kata from "./Kata.js";

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

    const nombreInput = document.querySelector("#nombre-kata");
    const descripcionInput = document.querySelector("#descripcion-kata");
    const dificultadSelect = document.querySelector("#dificultad");
    const añadirButton = document.querySelector("form#form_añadir button[type='submit']");
    
    añadirButton.addEventListener("click", function(event) {
        event.preventDefault();
    
        const nombre = nombreInput.value;
        const descripcion = descripcionInput.value;
        const dificultad = dificultadSelect.value;
    
       
        if (nombre && descripcion && dificultad) {
            const nuevaKata = new Kata(nombre, descripcion, dificultad);
            lista_Katas.añadirkata(nuevaKata);
            nombreInput.value = "";
            descripcionInput.value = "";
    
            addKataToContainer(nuevaKata);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });





    // Función para agregar katas a la lista
    function addKataToContainer(kata) {
        const contenedorKata = createElement("div");
        contenedorKata.className = "contenedor-kata";

        contenedorKata.appendChild(createElement("h4", kata.getNombre()));
        contenedorKata.appendChild(createElement("p", kata.getDescripcion()));
        contenedorKata.appendChild(createElement("p", `Dificultad: ${kata.getDificultad()}`)); 
        const btnEliminar = createElement("button", "Eliminar");
        btnEliminar.addEventListener("click", function () {
            if (confirm("¿Estás seguro de que deseas eliminar esta kata?")) {
                lista_Katas.eliminarKata(kata);
                cont_katas.removeChild(contenedorKata);
            }
        });
         contenedorKata.appendChild(btnEliminar);
        const btnEditar = createElement("button", "Editar");
       
        contenedorKata.appendChild(btnEditar);
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
    
        let katasFiltradas;
    
        if (tipoBusqueda === "nombre") {
            katasFiltradas = lista_Katas.buscar_Titulo(busqueda);
        } else if (tipoBusqueda === "descripcion") {
            katasFiltradas = lista_Katas.buscar_Descripcion(busqueda);
        } else if (tipoBusqueda === "dificultad") {
            katasFiltradas = lista_Katas.buscar_Dificultad(busqueda);
        } else {
            katasFiltradas = [];
        }
    
        // Actualiza la lista solo con los resultados de la búsqueda
        cont_katas.innerHTML = "";
        katasFiltradas.forEach(addKataToContainer);
    });


    const kataForm = document.querySelector("#form_añadir");
    kataForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreKata = document.querySelector("#nombre-kata").value;
        const descripcionKata = document.querySelector("#descripcion-kata").value;
        const dificultadKata = document.querySelector("#dificultad").value;

        const nuevaKata = new Kata(nombreKata, descripcionKata, dificultadKata);
        lista_Katas.añadirkata(nuevaKata);

        // Actualiza la lista con la nueva Kata
        addKataToContainer(nuevaKata);

        // Limpia los campos de entrada
        document.querySelector("#nombre-kata").value = "";
        document.querySelector("#descripcion-kata").value = "";
        document.querySelector("#dificultad").value = "Fácil";
    });

});
