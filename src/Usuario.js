const usuariosRegistrados= [];

class usuario {
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
    agregarUsuario() {
      usuariosRegistrados.push({ nombre: this.nombre, contraseña: this.contraseña });
    } 
    getUsuariosRegistrados() {
      return usuariosRegistrados;
    }
}

export default usuario;