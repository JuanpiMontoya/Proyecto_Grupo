class Kata {
    constructor(nombre, descripcion,dificultad,estado) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.dificultad = dificultad;
      this.estado = estado;
    }
  
    getNombre() {
        return this.nombre;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getDificultad() {
        return this.dificultad;
    }
    getEstado(){
        return this.estado;
    }
    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;

    }
    setDificultad(nuevaDificultad){
        this.dificultad = nuevaDificultad;
    }
    setEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }

}

export default Kata;