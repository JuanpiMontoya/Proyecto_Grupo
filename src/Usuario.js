const usuariosRegistrados= [];

class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    agregarUsuario(nuevoUsuario) {
      usuariosRegistrados.push(nuevoUsuario);
    } 
    getUsuariosRegistrados() {
      return usuariosRegistrados;
    }
}

export default Usuario;