const usuariosRegistrados= [];

class usuario {
    constructor(nombre,contraseña,tipo) {
      this.nombre = nombre;
      this.contraseña = contraseña;
      this.tipo = tipo;
    }
    getNombre() {
        return this.nombre;
    }
    getContraseña() {
      return this.contraseña;
    }
    getTipo() {
      return this.tipo;
    }
    agregarUsuario() {
      usuariosRegistrados.push({ nombre: this.nombre, contraseña: this.contraseña, tipo: this.tipo });
    } 
    getUsuariosRegistrados() {
      return usuariosRegistrados;
    }
}

export default usuario;