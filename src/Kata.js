class Kata {
    constructor(nombre, descripcion) {
      this.nombre = nombre;
      this.descripcion = descripcion;
    }
  
    getNombre() {
        return this.nombre;
    }

    getDescripcion() {
        return this.descripcion;
    }
}

export default Kata;