// / <reference types="Cypress" />

describe('The site in general', () => {
  it('loads with 0 tanties', () => {
    cy.visit('/');
  });
});

describe('the hero section', () => {
  it('should have a nice image', () => {
    cy.get('#hero').find('img');
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
