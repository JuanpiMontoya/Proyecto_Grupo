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
        contenedorKata.appendChild(createElement("span", `Dificultad: ${kata.getDificultad()}`));
        // Eliminar una kata
        const btnEliminar = createElement("button", "Eliminar");
        btnEliminar.addEventListener("click", function () {
            if (confirm("¿Estás seguro de que deseas eliminar esta kata?")) {
                lista_Katas.eliminarKata(kata);
                cont_katas.removeChild(contenedorKata);
            }
        });
        contenedorKata.appendChild(btnEliminar);
        //Editar
        const btnEditar = createElement("button", "Editar");
        btnEditar.addEventListener("click", function () {
            showEditForm(kata, contenedorKata);
        });
    
        function showEditForm(kata, contenedorKata) {
            // Crear formulario de edición
            const editForm = document.createElement("form");
    
            // Input para editar el nombre
            const nombreInput = document.createElement("input");
            nombreInput.type = "text";
            nombreInput.value = kata.getNombre();
            editForm.appendChild(nombreInput);
    
            // Input para editar la descripción
            const descripcionInput = document.createElement("input");
            descripcionInput.type = "text";
            descripcionInput.value = kata.getDescripcion();
            editForm.appendChild(descripcionInput);
    
            // Select para editar la dificultad
            const dificultadSelect = document.createElement("select");
            const opcionesDificultad = ["Fácil", "Media", "Difícil"];
            opcionesDificultad.forEach(opcion => {
                const option = document.createElement("option");
                option.value = opcion;
                option.textContent = opcion;
                dificultadSelect.appendChild(option);
            });
            dificultadSelect.value = kata.getDificultad();
            editForm.appendChild(dificultadSelect);
    
            // Botón para confirmar la edición
            const btnConfirmar = createElement("button", "Confirmar");
            btnConfirmar.addEventListener("click", function () {
                // Obtener los nuevos valores
                const nuevoNombre = nombreInput.value;
                const nuevaDescripcion = descripcionInput.value;
                const nuevaDificultad = dificultadSelect.value;
    
                // Aplicar los cambios
                lista_Katas.editarKata(kata, nuevoNombre, nuevaDescripcion, nuevaDificultad);
    
                // Actualizar la vista de la kata
                updateKataView(contenedorKata, nuevoNombre, nuevaDescripcion, nuevaDificultad);
    
                // Eliminar el formulario y el botón de confirmar
                contenedorKata.removeChild(editForm);
                contenedorKata.removeChild(btnConfirmar);
            });
    
            // Agregar formulario de edición al contenedor
            contenedorKata.appendChild(editForm);
            contenedorKata.appendChild(btnConfirmar);
        }
    
        contenedorKata.appendChild(btnEditar);
        cont_katas.appendChild(contenedorKata);
    }
    //Actualiza la vista de katas
    function updateKataView(contenedorKata, nuevoNombre, nuevaDescripcion, nuevaDificultad) {
        const nombreElement = contenedorKata.querySelector("h4");
        const descripcionElement = contenedorKata.querySelector("p:nth-child(2)");
        const dificultadElement = contenedorKata.querySelector("span:nth-child(3)");
    
        nombreElement.textContent = nuevoNombre;
        descripcionElement.textContent = nuevaDescripcion;
        dificultadElement.textContent = `Dificultad: ${nuevaDificultad}`;
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
        const busquedaDificultad = event.target.elements["dificultadBusqueda"].value;
    
        let katasFiltradas;
    
        if (tipoBusqueda === "nombre") {
            katasFiltradas = lista_Katas.buscar_Titulo(busqueda);
        } else if (tipoBusqueda === "descripcion") {
            katasFiltradas = lista_Katas.buscar_Descripcion(busqueda);
        } else if (tipoBusqueda === "dificultad") {
            if(busquedaDificultad === "facil"){ katasFiltradas = lista_Katas.buscar_Dificultad("Fácil"); }
            else if(busquedaDificultad === "media"){ katasFiltradas = lista_Katas.buscar_Dificultad("Media"); }
            else if(busquedaDificultad === "dificil"){ katasFiltradas = lista_Katas.buscar_Dificultad("Difícil"); }
        } else {
            katasFiltradas = [];
        }
    
        // Actualiza la lista solo con los resultados de la búsqueda
        cont_katas.innerHTML = "";
        katasFiltradas.forEach(addKataToContainer);
    });


    const mostrarFormularioBtn = document.getElementById("mostrar-formulario");
        const formulario = document.getElementById("form_añadir");

        mostrarFormularioBtn.addEventListener("click", () => {
            if (formulario.style.display === 'none' || formulario.style.display === '') {
                formulario.style.display = 'block';
            } else {
                formulario.style.display = 'none';
            }
        });

        const kataForm = document.querySelector("#form_añadir");
        kataForm.addEventListener("submit", function (event) {
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

            // Oculta el formulario después de añadir la Kata
            formulario.style.display = 'none';
        });

});
