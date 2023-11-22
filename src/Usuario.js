import curso from "./Curso";

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
    crearCurso(nombreCurso, descripcionCurso){
      const nuevoCurso = new curso(nombreCurso, descripcionCurso);
      if(nuevoCurso.validarYagregar()){
        alert("El curso se creó con éxito");
      }
      else{
        alert("El curso no se pudo crear! Solo los Docentes pueden crear cursos");
      }
    }
}

export default usuario;