import Kata from "./Kata.js";

class ListaDeKatas {
    constructor() {
      this.lista_Katas = [];
    }

    añadirkata(nombreKata,descKata,difKata) {
        const KataNuevo = new Kata(nombreKata,descKata,difKata);
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

    buscar_Dificultad(dificultad){
      const expRegular = new RegExp(dificultad, "i");
      const resultados = [];
      this.lista_Katas.forEach(kata => {
        if (expRegular.test(kata.getDificultad())) {
          resultados.push(kata);
        }
      });
      return resultados;
    }

  }

export default ListaDeKatas;
