const usuariosRegistrados= [];

class Usuario {
    constructor(nombre,contraseña) {
      this.nombre = nombre;
      this.contraseña = contraseña;
    }
    getNombre() {
        return this.nombre;
    }
    getContraseña() {
      return this.contraseña;
    }
    agregarUsuario(nuevoUsuario) {
      usuariosRegistrados.push(nuevoUsuario);
    } 
    getUsuariosRegistrados() {
      return usuariosRegistrados;
    }
}

export default Usuario;