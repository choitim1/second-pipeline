const sizes = ['iphone-6', 'ipad-2', 'macbook-16', [1024, 768]]

describe('koel', () => {
  sizes.forEach((size) => {
    it(`registration ${size}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
      let number = Math.floor(Math.random() * 100000 + 1);
      cy.visit('https://bbb.testpro.io');
      cy.get('#hel').click();
      cy.get('#email').type(`someemail${number}@gmail.com`);
      cy.get('#button').click();

      cy.get('h3').should('have.text', 'Registration Successful');

      cy.get('.button').click();

      cy.get('[data-testid="login-form"]').should('be.visible')

    })
    it(`login ${size}`, () =>{
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
    });
  })
})