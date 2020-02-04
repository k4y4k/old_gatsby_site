/// <reference types="Cypress" />

describe('The site in general', () => {
  it('loads with 0 tanties', () => {
    cy.visit('/')
  })

  it('has a projects section', () => {
    cy.get('#projects')
  })

  it('has a blog section', () => {
    cy.get('#blog')
  })
})

describe('Blog Section', function() {
  it('has a featured post, with a title, an image, and a link to read it', () => {
    cy.get('#featured-blog-post').then(post => {
      cy.wrap(post)
        .find('img')
        .parent()
        .find('div')
        .parent()
        .find('h2')
        .parent()
        .find('p')
        .parent()
        .find('a')
    })
  })

  // OPTIONALLY blog roll with < 5 posts
  // have no images

  // it('should also have a short blogroll', () => {
  //   cy.get('#blogroll').then(blogroll => {
  //     cy.wrap(blogroll)
  //       .children()
 
  //       .should('have.length.lt', 5)
  //       .and('have.length.gt', 0)

       
  //   })
  // })
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
    it('has links', () => {
      cy.get('#hero-nav > ul')
        .children()
        .should('have.length.gte', 0)
    })

    it('has a hire button as the last link', () => {
      cy.get('li:last-of-type').then(lastEl => {
        cy.wrap(lastEl)
          .contains(/hire/i)
          .and('has.css', 'background-color')
      })
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

// describe('Accessibility checks', () => {
//   beforeEach(() => {
//     cy.visit('/')
//     cy.injectAxe()
//     cy.wait(500)
//   })
//   it('Has no detectable a11y violations on load', () => {
//     cy.checkA11y()
//   })
// })
