import ListaDeKatas from "./Lista_Katas.js";


describe("Katas", () => {
  it("Se permite meter un nombre de kata al proyecto", () => {
    const listaPr = new ListaDeKatas();
    expect(listaPr.añadirkata("Kata - Calculadora String").getNombre()).toEqual("Kata - Calculadora String");
  });

  it("Se permite añadir varios nombres de kata al proyecto", () => {
    const lista = new ListaDeKatas();
    // Se añaden varios katas a la lista nueva
    lista.añadirkata("Kata - Calculadora String","");
    lista.añadirkata("Kata - Punto de venta kata","");
    lista.añadirkata("Kata - Kata bancario","");
  
    // llenamos y verificamos que la todos los katas esten en la lista
    const listaPr = lista.devolver_ListaKatas();
    expect(listaPr[0].getNombre()).toContain("Kata - Calculadora String");
    expect(listaPr[1].getNombre()).toContain("Kata - Punto de venta kata");
    expect(listaPr[2].getNombre()).toContain("Kata - Kata bancario");
  });

  it("Se permite añadir varios katas con la clase lista_katas", () => {
    const listaPr = new ListaDeKatas();
    listaPr.añadirkata("Kata - Calculadora String","");
    listaPr.añadirkata("Kata - Punto de venta kata","");
    listaPr.añadirkata("Kata - Kata bancario","");

    //verificamos que la todos los katas esten en la lista
    expect(listaPr.devolver_ListaKatas()[0].getNombre()).toContain("Kata - Calculadora String");
    expect(listaPr.devolver_ListaKatas()[1].getNombre()).toContain("Kata - Punto de venta kata");
    expect(listaPr.devolver_ListaKatas()[2].getNombre()).toContain("Kata - Kata bancario");
  });
});

describe("Detalles de Katas", () => {
  it("Se permite meter el nombre y detalle de un kata", () => {
    const lista = new ListaDeKatas();
    lista.añadirkata("Kata - Calculadora String","Cree una calculadora simple que tome una cadena con hasta dos números, separados por comas, y devuelve un número entero de la operacion especifica");

    //verificamos que la descripcion del kata este en la lista
    const listaPr = lista.devolver_ListaKatas();
    expect(listaPr[0].getDescripcion()).toContain("Cree una calculadora simple que tome una cadena con hasta dos números, separados por comas, y devuelve un número entero de la operacion especifica");
  });
});