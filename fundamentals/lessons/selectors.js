///// <reference types="cypress" />

describe('Cypress Selectors Tutorial', () => {
  
    // Selecciona todos los elementos <nav>
    it('Selector por etiqueta', () => {
      cy.get('nav')
    });
  
    // Selecciona el primer elemento con la clase .nb-select
    it('Selector por clase', () => {
      cy.get('.nb-select')
    });
  
    // Selecciona el elemento con el ID #nb-select
    it('Selector por ID', () => {
      cy.get('#nb-select')
    });
  
    // Selecciona el <nb-select> dentro de un <nav>
    it('Selector descendente', () => {
      cy.get('nav nb-select')
    });
  
    // Selecciona el elemento <nav> con la clase .nb-select
    it('Selector combinado con clase', () => {
      cy.get('nav.nb-select')
    });
  
    // Selecciona el <nav> con el ID #nb-select
    it('Selector combinado con ID', () => {
      cy.get('nav#nb-select')
    });
  
    // Selecciona el <input> con el atributo type="email"
    it('Selector por atributo', () => {
      cy.get('input[type="email"]')
    });
  
    // Selecciona el botón que contiene el texto "Login"
    it('Selector por texto', () => {
      cy.contains('button', 'Login')
    });
  
    // Selecciona el primer <li> en la lista
    it('Selector con pseudo-clase', () => {
      cy.get('ul li:first')
    });
  
    // Selecciona el <a> dentro de un contenedor con la clase .menu
    it('Selector dentro de un contenedor específico', () => {
      cy.get('.menu a')
    });
  
    // Uso de variables para almacenar selectores
    it('Uso de variables para selectores', () => {
      const cColorBtn = "nav.nb-select";
      const cInputEmail = 'input[type="email"]';
  
      cy.get(cColorBtn)
      cy.get(cInputEmail)
    });
});
