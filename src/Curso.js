const cursosDisponibles= [];

class curso {
    constructor(nombre) {
      this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    agregarCurso(){
        cursosDisponibles.push({ nombre: this.nombre }); 
    }
    getCursosDisponibles(){
        return cursosDisponibles;
    }
}

export default curso;