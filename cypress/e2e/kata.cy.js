describe("Mostrar Katas", () => {
    it("Se verifica si el contenido de los 3 katas iniciales es correcto", () => {
        cy.visit("/");
        const titulosKatas = ['Kata - Calculadora String', 'Kata - Punto de venta kata', 'Kata - Kata bancario'];
        const descripKatas = ['Cree una calculadora simple que tome una cadena con hasta dos números, separados por comas, y devuelve un número entero de la operacion especifica', 'Cree una aplicación sencilla para escanear códigos de barras para vender productos.', 'Cree una aplicación bancaria sencilla con funciones de depósito, retiro e impresión de estados de cuenta, usando una clase pública, y utilizando cadenas y enteros para fechas y cantidades respectivamente.'];
        const difKatas = ['Media', 'Fácil', 'Difícil'];
        cy.get('.contenedor-kata').each((contenedor, index) => {
            // Dentro de cada contenedor, verificar que el título sea el esperado
            cy.wrap(contenedor).find('h4').should('have.text', titulosKatas[index]);
            cy.wrap(contenedor).find('p').should('have.text', descripKatas[index]);
            cy.wrap(contenedor).find('span').should('have.text', "Dificultad: " + difKatas[index]);
        });
    });
});
