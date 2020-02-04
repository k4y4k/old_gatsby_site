/// <reference types="Cypress" />

describe('The site in general', () => {
  it('loads with 0 tanties', () => {
    cy.visit('/')
  })

  it('has a projects section', () => {
    cy.get('#projects')
  })
})

describe('Projects', () => {
  it('has at least 1 visible project', () => {
    cy.get('.project-card')
  })

  describe('Project cards', () => {
    it('should have an image, a title, a desciption', () => {
      cy.get('.project-card').then(x => {
        // FIXME: probably better way to do this
        cy.wrap(x)
          .find('img')
          .parent()
          .find('hr')
          .parent()
          .find('h2')
          .parent()
          .find('p')
      })
    })

    it('should have one or more buttons that go to some code or a live demo or both', () => {
      cy.get('.project-card').then(x => {
        cy.wrap(x)
          .find('a')
          .then(y => {
            cy.wrap(y)
              .should('have.attr', 'href')
              .then(href => {
                cy.visit(href)
              })
          })
      })
    })
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
