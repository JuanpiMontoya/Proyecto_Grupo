import añadirkata from "./clases_proyecto.js";

describe("Katas", () => {
  it("Se permite meter un nombre de kata al proyecto", () => {
    expect(añadirkata("Kata - Calculadora String")).toEqual("Kata - Calculadora String");
  });
});