let lista_Katas = [];

function añadirkata(nombreKata) {
    lista_Katas.push(nombreKata);
    return lista_Katas[lista_Katas.length - 1];
}

function devolver_ListaKatas() {
    return lista_Katas;
}

export { añadirkata, devolver_ListaKatas };
