// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('The site in general', () => {
  it('loads with 0 tanties', () => {
    cy.visit('/');
  });
});

describe('the hero section', () => {
  it('should have a nice image', () => {
    cy.get('#hero').find('img');
  });
  it('should have a nav, with at least one link -  the last link should be a button that says hire', () => {
    cy.get('#hero')
      .find('nav ul')
      .children()
      .should('have.length.gte', 1)
      .last()
      .find('a')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(128, 90, 213)');

    // if we got this far, this definitely exists
    cy.get('#hero nav ul')
      .find('a')
      .last()
      // match any case of the word hire
      .contains(/hire/i);
  });
});

describe('the main content section', () => {
  it('should have SOMETHING', () => {
    cy.get('main')
      .children()
      .should('have.length.gte', 1);
  });
});

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
  });
  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y();
  });
});
