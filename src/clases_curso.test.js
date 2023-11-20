import curso from "./Curso.js"

describe("Crear Curso", () => {
    it("Se permite crear un nuevo curso", () => { 
        const nuevoCurso = new curso("Ing. de software 2-23 UCB");
        expect(nuevoCurso.getNombre()).toEqual("Ing. de software 2-23 UCB");
    });
});