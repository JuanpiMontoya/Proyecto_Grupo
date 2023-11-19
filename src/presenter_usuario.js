const registrarseButton = document.getElementById('botonRegistro');
const salirRegistro = document.getElementById('salir-Reg');
const guardarRegistro = document.getElementById('guardar-Reg');
const contRegistro = document.getElementById('overlay-Registro');
const nombreRegistro = document.getElementById('nombreReg');
const resultadosUsuario = document.getElementById('resultadosUs'); 

import Usuario from "./Usuario.js";


registrarseButton.addEventListener('click', () => {
    contRegistro.style.display = 'flex';
});

salirRegistro.addEventListener('click', () => {
    contRegistro.style.display = 'none';
});

guardarRegistro.addEventListener('click', () => {
    const nombreUsNuevo = nombreRegistro.value.trim();
    if (nombreUsNuevo !== '') {
        const nuevoUsuario = new Usuario(nombreUsNuevo);
        nuevoUsuario.agregarUsuario(nuevoUsuario);
        contRegistro.style.display = 'none';
        resultadosUsuario.textContent ='El usuario con nombre '+nombreUsNuevo+' se registro';
    } else {
        console.log('El nombre registrado no puede estar vacío');
    }
});
