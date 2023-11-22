const cursosDisponibles= [];

class curso {
    constructor(nombre, descripcion, propietario) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.propietario = propietario;
    }
    getNombre() {
        return this.nombre;
    }

    getDescripcion (){
        return this.descripcion;
    }
    agregarCurso(){ 
        cursosDisponibles.push({ nombre: this.nombre, descripcion: this.descripcion}); 
    }
    validarYagregar(){ //el propietario existe, tiene un tipo y ese tipo es Docente
        if(this.propietario && this.propietario.getTipo() && this.propietario.getTipo() === "Docente"){
            this.agregarCurso();
            return true;
        }
        else { return false; }
    }
    getCursosDisponibles(){
        return cursosDisponibles;
    }
}

export default curso;