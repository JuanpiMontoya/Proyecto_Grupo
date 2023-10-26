import Kata from "./Kata.js";

class ListaDeKatas {
    constructor() {
      this.lista_Katas = [];
    }

    añadirkata(nombreKata,descKata,difKata,estadoKata) {
        const KataNuevo = new Kata(nombreKata,descKata,difKata,estadoKata);
        this.lista_Katas.push(KataNuevo);
        return this.lista_Katas[this.lista_Katas.length - 1];
    }

    devolver_ListaKatas() {
    return this.lista_Katas;
    }

    buscar_Titulo(titulo){
      const expRegular = new RegExp(titulo, "i");
      const resultados = [];
      this.lista_Katas.forEach(kata => {
        if (expRegular.test(kata.getNombre())) {
          resultados.push(kata);
        }
      });
      return resultados;
    }

    buscar_Descripcion(titulo){
      const expRegular = new RegExp(titulo, "i");
      const resultados = [];
      this.lista_Katas.forEach(kata => {
        if (expRegular.test(kata.getDescripcion())) {
          resultados.push(kata);
        }
      });
      return resultados;
    }

    buscar_Dificultad(dificultadKata){
      const expRegular = new RegExp(dificultadKata, "i");
      const resultados = [];
      this.lista_Katas.forEach(kata => {
        if (expRegular.test(kata.getDificultad())) {
          resultados.push(kata);
        }
      });
      return resultados;
    }

    eliminarKata(kata){
      const index = this.lista_Katas.indexOf(kata);
      if (index !== -1){
        this.lista_Katas.splice(index,1);
      }
    }
    editarKata(kata, nuevoNombre,nuevaDescripcion,nuevaDificultad) {
      kata.setNombre(nuevoNombre);
      kata.setDescripcion(nuevaDescripcion);
      kata.setDificultad(nuevaDificultad);
    }

    buscar_Estado(estado){
      const expRegular = new RegExp(estado, "i");
      const resultados = [];
      this.lista_Katas.forEach(kata => {
        if (expRegular.test(kata.getEstado())) {
          resultados.push(kata);
        }
      });
      return resultados;
    }
}

export default ListaDeKatas;
