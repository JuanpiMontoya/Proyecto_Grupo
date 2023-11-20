import curso from "./Curso.js";
import assert  from "assert";
import usuario from "./Usuario.js";

describe("Crear Curso", () => {
    it("Se permite crear un nuevo curso", () => { 
        const nuevoCurso = new curso("Ing. de software 2-23 UCB");
        expect(nuevoCurso.getNombre()).toEqual("Ing. de software 2-23 UCB");
    });

    it("Se permite añadir un curso a un array de cursos de la página", () => { 
        const nuevoCurso = new curso("Ing. de software 2-23 UCB");
        nuevoCurso.agregarCurso();
        assert.ok(nuevoCurso.getCursosDisponibles().some(curso => curso.nombre === nuevoCurso.getNombre()));
    });
});