/// <reference types="Cypress" />

describe('The site in general', () => {
  it('loads with 0 tanties', () => {
    cy.visit('/')
  })
})

describe('Hero', () => {
  it('has a hella cool title', () => {
    cy.get('img')
  })

  describe('the nav', () => {
    it('has 3 links', () => {
      cy.get('#hero-nav > ul')
        .children()
        .should('have.length', 3)
    })

    it('has a button as the last link', () => {
      cy.get('li:last-of-type')
        .should('have.css', 'border-radius')
        .and('match', /px/)

      cy.get('li:last-of-type')
        .should('have.css', 'background-color')
        .and('match', /rgba/)
    })

    it('changes on hover', () => {
      cy.get('li')
        .each(listitem => {
          listitem.trigger('mouseover')
        })
        .should('have.css', 'text-decoration')
        .and('match', /solid/)
    })
  })
})

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(500)
  })
  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y()
  })
})
