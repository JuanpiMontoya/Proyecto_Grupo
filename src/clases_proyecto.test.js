import ListaDeKatas from "./clases_proyecto.js";


describe("Katas", () => {
  it("Se permite meter un nombre de kata al proyecto", () => {
    const listaPr = new ListaDeKatas();
    expect(listaPr.añadirkata("Kata - Calculadora String")).toEqual("Kata - Calculadora String");
  });

  it("Se permite añadir varios nombres de kata al proyecto", () => {
    const listaPr = new ListaDeKatas();
    // Se añaden varios katas a la lista nueva
    listaPr.añadirkata("Kata - Calculadora String");
    listaPr.añadirkata("Kata - Punto de venta kata");
    listaPr.añadirkata("Kata - Kata bancario");
  
    // llenamos y verificamos que la todos los katas esten en la lista
    const lista = listaPr.devolver_ListaKatas();
    expect(lista).toContain("Kata - Calculadora String");
    expect(lista).toContain("Kata - Punto de venta kata");
    expect(lista).toContain("Kata - Kata bancario");
  });

  it("Se permite añadir varios katas con la clase lista_katas", () => {
    const listaPr = new ListaDeKatas();
    listaPr.añadirkata("Kata - Calculadora String");
    listaPr.añadirkata("Kata - Punto de venta kata");
    listaPr.añadirkata("Kata - Kata bancario");

    expect(listaPr.devolver_ListaKatas()).toContain("Kata - Calculadora String");
    expect(listaPr.devolver_ListaKatas()).toContain("Kata - Punto de venta kata");
    expect(listaPr.devolver_ListaKatas()).toContain("Kata - Kata bancario");
  });
});