describe("Creacion Usuario con nombre", () => {
  it("Se verifica si se imprime el mensaje en la consola al hacer clic en guardar-Reg", () => {
      cy.visit('registro.html');
      cy.get('#botonRegistro').click();
      cy.get('#nombreReg').type("Augusto");
      cy.get('#guardar-Reg').click();
      cy.get('#resultadosUs').should('have.text', 'El usuario con nombre Augusto se registro');
  });
});
