import { añadirkata, devolver_ListaKatas }from "./clases_proyecto.js";

describe("Katas", () => {
  it("Se permite meter un nombre de kata al proyecto", () => {
    expect(añadirkata("Kata - Calculadora String")).toEqual("Kata - Calculadora String");
  });

  it("Se permite añadir varios nombres de kata al proyecto", () => {
    // Se añaden varios katas a la lista nueva
    añadirkata("Kata - Calculadora String");
    añadirkata("Kata - Punto de venta kata");
    añadirkata("Kata - Kata bancario");
  
    // llenamos y verificamos que la todos los katas esten en la lista
    const lista = devolver_ListaKatas();
    expect(lista).toContain("Kata - Calculadora String");
    expect(lista).toContain("Kata - Punto de venta kata");
    expect(lista).toContain("Kata - Kata bancario");
  });
});