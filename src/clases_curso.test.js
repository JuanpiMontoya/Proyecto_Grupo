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

    it("Se permite se permite crear un curso solo cuando se esta registrado como DOCENTE", () => { 
        const nuevoUsr = new usuario("Din Djarin", "Th1sIsth3Way", "Docente");
        const nuevoCurso = new curso("Ing. de software 2-23 UCB", nuevoUsr);
        nuevoCurso.validarYagregar();
        assert.ok(nuevoCurso.getCursosDisponibles().some(curso => curso.nombre === nuevoCurso.getNombre()));
    });
    it("NO se permite se permite crear un curso cuando se esta registrado como Estudiante", () => { 
        const nuevoUsr = new usuario("Grogu", "MandoR0ckz", "Estudiante");
        const nuevoCurso = new curso("Ing. de software", nuevoUsr);
        nuevoCurso.validarYagregar();
        assert.ok(!nuevoCurso.getCursosDisponibles().some(curso => curso.nombre === nuevoCurso.getNombre()));
    });

    it("Deberia permitir añadir la descripcion de un nuevo curso", () => { 
        const nuevoUsr = new usuario("Din Djarin", "Th1sIsth3Way", "Docente");
        const nuevoCurso = new curso("Ing. de software 2-23 UCB", "Este curso tiene el como fin practicar TDD", nuevoUsr);
        expect(nuevoCurso.getDescripcion()).toEqual("Este curso tiene el como fin practicar TDD");
    });


});