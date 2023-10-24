class Kata {
    constructor(nombre, descripcion,dificultad) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.dificultad = dificultad;
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
    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;

    }
}

export default Kata;