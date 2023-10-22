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
  }

export default ListaDeKatas;
