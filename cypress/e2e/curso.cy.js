describe("Creacion Curso", () => {
    it("Se verifica si se puede crear un nuevo curso con nombre con error de logeo", () => {
        cy.visit('/');
        cy.get('#btn_crearcurso').click();
        cy.get('#nombreCurso').type("Curso Ing Software");
        cy.get('#bt_AceptCurso').click();
        cy.on('window:alert', (mensaje) => {
            // Verifica si el mensaje de la alerta es el esperado
            expect(mensaje).to.equal('No hay usuario logeado. Inicia sesión antes de crear un curso.');
        });
    });
    it("Se verifica si se puede crear un nuevo curso con nombre con error de nombre de curso", () => {
        
        cy.visit('/');
        cy.get('#botonRegistro').click();
        cy.get('#nombreReg').type("Walter");
        cy.get('#tipoReg').select('Docente');
        cy.get('#tipoReg').should('have.value', 'Docente');
        cy.get('#contraReg').type("bypass2333");
        cy.get('#confirmarContra').type("bypass2333");
        cy.get('#guardar-Reg').click();
        cy.get('#botonIniciarSesion').click();
        cy.get('#nombreIn').type("Walter");
        cy.get('#contraIn').type("bypass2333");
        cy.get('#Inicio-Sesion').click();
        cy.get('#btn_crearcurso').click();
        cy.get('#bt_AceptCurso').click();
        cy.on('window:alert', (mensaje) => {
            // Verifica si el mensaje de la alerta es el esperado
            expect(mensaje).to.equal('Faltan datos para crear el curso');
        });
    });

    it("Se verifica si se puede crear un nuevo curso con nombre sin error", () => {
        
        cy.visit('/');
        cy.get('#botonRegistro').click();
        cy.get('#nombreReg').type("Walter");
        cy.get('#tipoReg').select('Docente');
        cy.get('#tipoReg').should('have.value', 'Docente');
        cy.get('#contraReg').type("bypass2333");
        cy.get('#confirmarContra').type("bypass2333");
        cy.get('#guardar-Reg').click();
        cy.get('#botonIniciarSesion').click();
        cy.get('#nombreIn').type("Walter");
        cy.get('#contraIn').type("bypass2333");
        cy.get('#Inicio-Sesion').click();
        cy.get('#btn_crearcurso').click();
        cy.get('#nombreCurso').type("Curso de Ing. de Software");
        cy.get('#bt_AceptCurso').click();
        cy.on('window:alert', (mensaje) => {
            // Verifica si el mensaje de la alerta es el esperado
            expect(mensaje).to.equal('El curso se creó con éxito');
        });
    });
  });