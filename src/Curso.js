const cursosDisponibles= [];

class curso {
    constructor(nombre, propietario) {
      this.nombre = nombre;
      this.propietario = propietario;
      this.inscritos = [];
    }
    getNombre() {
        return this.nombre;
    }
    agregarCurso(){ 
        cursosDisponibles.push({ nombre: this.nombre }); 
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
    getInscritos(){
        return this.inscritos;
    }
    inscribirAlumno(alumno){
        if(alumno && alumno.getTipo() && alumno.getTipo() === "Estudiante"){
            this.inscritos.push(alumno);
        }

    }
}

export default curso;