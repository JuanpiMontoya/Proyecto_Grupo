import usuario from "./Usuario.js";

//elementos registrar usuario
const registrarseButton = document.getElementById('botonRegistro');
const contRegistro = document.getElementById('overlay-Registro');
const guardarRegistro = document.getElementById('guardar-Reg');
const nombreRegistro = document.getElementById('nombreReg');
const contraRegistro = document.getElementById('contraReg');
const confirmarContraseña = document.getElementById('confirmarContra');
const salirReg = document.getElementById('salir-Reg');
//elementos inicio de sesion
const inicioButton = document.getElementById('botonIniciarSesion');
const contInicio = document.getElementById('overlay-Inicio');
const inicioSesion = document.getElementById('Inicio-Sesion');
const nombreInicio = document.getElementById('nombreIn');
const contraseñaInicio = document.getElementById('contraIn');
const salirIn = document.getElementById('salir-In');

const resultadosUsuario = document.getElementById('resultadosUs');


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
    const contraUsNuevo = contraRegistro.value.trim();
    const confirmarUsNuevo = confirmarContraseña.value.trim();
    if (nombreUsNuevo !== '' && contraUsNuevo !== '' && confirmarUsNuevo !== '' ) {
        if(contraUsNuevo == confirmarUsNuevo){
            // Creamos el nuevo usuario y lo agregamos
            nuevoUsuario = new usuario(nombreUsNuevo);
            nuevoUsuario.agregarUsuario();
            usuariosGuardados.push({ nombre: nombreUsNuevo , contraseña: contraUsNuevo});

            // Mensaje de registro correcto
            contRegistro.style.display = 'none';
            resultadosUsuario.textContent ='El usuario con nombre '+nombreUsNuevo+' se registro';
            localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
            setTimeout(() => {
                resultadosUsuario.textContent = '';
            }, 4000);
        }
        else{
            alert('Error al ingresar contraseña');
        }
    } else {
        alert('El nombre y/o contraseña registrada no puede estar vacío');
    }
});

inicioSesion.addEventListener('click', () => {
    const nombreIngresado = nombreInicio.value.trim();
    const contraIngresada = contraseñaInicio.value.trim();
    if (nombreIngresado !== '' && contraIngresada != '') {
        for (const usuarioRegistrado of usuariosGuardados) {
            if (nombreIngresado === usuarioRegistrado.nombre && contraIngresada === usuarioRegistrado.contraseña) {
                contInicio.style.display = 'none';
                resultadosUsuario.textContent = 'El usuario con nombre ' + nombreIngresado + ' se ingresó correctamente';
                setTimeout(() => {
                    resultadosUsuario.textContent = '';
                }, 4000);
                window.location.href = 'index.html';
            }
        }   
    } else {
        alert('El nombre y/o contraseña para iniciar sesión no puede estar vacío');
    }
});
