class ListaDeKatas {
    constructor() {
      this.lista_Katas = [];
    }

    añadirkata(nombreKata) {
        this.lista_Katas.push(nombreKata);
        return this.lista_Katas[this.lista_Katas.length - 1];
    }

    devolver_ListaKatas() {
    return this.lista_Katas;
    }
  }

export default ListaDeKatas;
