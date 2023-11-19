import usuario from "./usuario.js";

const registrarseButton = document.getElementById('botonRegistro');
const salirReg = document.getElementById('salir-Reg');
const guardarRegistro = document.getElementById('guardar-Reg');
const contRegistro = document.getElementById('overlay-Registro');
const nombreRegistro = document.getElementById('nombreReg');
const resultadosUsuario = document.getElementById('resultadosUs');
const inicioButton = document.getElementById('botonIniciarSesion');
const contInicio = document.getElementById('overlay-Inicio');
const salirIn = document.getElementById('salir-In');
const inicioSesion = document.getElementById('Inicio-Sesion');
const nombreInicio = document.getElementById('nombreIn');

let usuariosGuardados;
let nuevoUsuario;

document.addEventListener('DOMContentLoaded', () => {
   // Obtenemos la lista de usuarios guardados en localStorage (si existe)
   usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

   // Recorremos los usuarios guardados y creamos instancias para cada uno
   for (const usuarioGuardado of usuariosGuardados) {
       nuevoUsuario = new usuario(usuarioGuardado.nombre);
       nuevoUsuario.agregarUsuario();
   }
});

registrarseButton.addEventListener('click', () => {
    contRegistro.style.display = 'flex';
});

salirReg.addEventListener('click', () => {
    contRegistro.style.display = 'none';
});

inicioButton.addEventListener('click', () => {
    contInicio.style.display = 'flex';
});

salirIn.addEventListener('click', () => {
    contInicio.style.display = 'none';
});


guardarRegistro.addEventListener('click', () => {
    const nombreUsNuevo = nombreRegistro.value.trim();
    if (nombreUsNuevo !== '') {
        // Creamos el nuevo usuario y lo agregamos
        nuevoUsuario = new usuario(nombreUsNuevo);
        nuevoUsuario.agregarUsuario();
        usuariosGuardados.push({ nombre: nombreUsNuevo });

        // Mensaje de registro correcto
        contRegistro.style.display = 'none';
        resultadosUsuario.textContent ='El usuario con nombre '+nombreUsNuevo+' se registro';
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
        setTimeout(() => {
            resultadosUsuario.textContent = '';
        }, 4000);
    } else {
        console.log('El nombre registrado no puede estar vacío');
    }
});

inicioSesion.addEventListener('click', () => {
    const nombreIngresado = nombreInicio.value.trim();
    if (nombreIngresado !== '') {
        for (const usuarioRegistrado of usuariosGuardados) {
            if (nombreIngresado === usuarioRegistrado.nombre) {
                contInicio.style.display = 'none';
                resultadosUsuario.textContent = 'El usuario con nombre ' + nombreIngresado + ' se ingresó correctamente';
                setTimeout(() => {
                    resultadosUsuario.textContent = '';
                }, 4000);
                //window.location.href = 'index.html';
            }
        }
        console.log('El Nombre de usuario no se encontro o no esta registrado');
    } else {
        console.log('El nombre para iniciar sesión no puede estar vacío');
    }
});
