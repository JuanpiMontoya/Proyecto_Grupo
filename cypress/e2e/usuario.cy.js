describe("Creacion Usuario", () => {
  it("Se verifica si se puede registrar un nuevo usuario con nombre y contraseña con error", () => {
      cy.visit('registro.html');
      cy.get('#botonRegistro').click();
      cy.get('#nombreReg').type("Augusto");
      cy.get('#contraReg').type("Naospx123");
      cy.get('#confirmarContra').type("oppula862");
      cy.get('#guardar-Reg').click();
      cy.get('#resultadosUs').should('not.have.text', 'El usuario con nombre Augusto se registro');
  });
  it("Se verifica si se puede registrar un nuevo usuario con nombre y contraseña sin error", () => {
    cy.visit('registro.html');
    cy.get('#botonRegistro').click();
    cy.get('#nombreReg').type("Augusto");
    cy.get('#contraReg').type("Parker775");
    cy.get('#confirmarContra').type("Parker775");
    cy.get('#guardar-Reg').click();
    cy.get('#resultadosUs').should('have.text', 'El usuario con nombre Augusto se registro');
});
});

describe("Iniciar sesion usuario", () => {
  it("Se verifica si el usuario ingresado con nombre puede iniciar sesion", () => {
    cy.visit('registro.html');
    cy.get('#botonRegistro').click();
    cy.get('#nombreReg').type("Daniela");
    cy.get('#contraReg').type("Monps4590");
    cy.get('#confirmarContra').type("Monps4590");
    cy.get('#guardar-Reg').click();
    cy.get('#botonIniciarSesion').click();
    cy.get('#nombreIn').type("Daniela");
    cy.get('#contraIn').type("Monps4590");
    cy.get('#Inicio-Sesion').click();
    cy.get('#resultadosUs').should('have.text', 'El usuario con nombre Daniela se ingresó correctamente');
  });

  it("Se verifica error con el usuario ingresando nombre y contraseña", () => {
    cy.visit('registro.html');
    cy.get('#botonRegistro').click();
    cy.get('#nombreReg').type("Mariano");
    cy.get('#contraReg').type("nyl7634");
    cy.get('#confirmarContra').type("nyl7634");
    cy.get('#guardar-Reg').click();
    cy.get('#botonIniciarSesion').click();
    cy.get('#nombreIn').type("Mariano");
    cy.get('#contraIn').type("nyl7634");
    cy.get('#Inicio-Sesion').click();
    cy.get('#resultadosUs').should('not.have.text', 'El usuario con nombre Mariano se ingresó correctamente');
  });
});