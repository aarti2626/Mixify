describe('Open Website', () => {
  it('website opens', () => {
    cy.visit('http://localhost:8080')
  })
})

describe('Title', () => {
  it('title in tab is "Mixify"', () => {
    cy.visit('http://localhost:8080')

    cy.title().should('equal', "Mixify")
    
  })
})

describe('Submit Button', () => {
  it('clicking "submit" navigates to a new url', () => {
    cy.visit('http://localhost:8080')

    cy.contains('Submit').click()

    cy.url().should('include', '/results')
  })
})

describe('Survey Functionality', () => {
  it('user is able to click through survey', () => {
    cy.visit('http://localhost:8080')

    cy.get('mat-button-toggle[type=button]').eq(0).click()
    cy.get('mat-button-toggle[type=button]').eq(4).click()
    cy.get('input[type=range]').as('range').invoke('val', 5).trigger('change')
    cy.get('mat-button-toggle[type=button]').eq(8).click()
    cy.get('mat-button-toggle[type=button]').eq(12).click()
    cy.get('mat-button-toggle[type=button]').eq(16).click()

    cy.contains('Submit').click()

    cy.url().should('include', '/results')
  })
})

describe('Results Header', () => {
  it('user is able to click through survey', () => {
    cy.visit('http://localhost:8080')

    cy.get('mat-button-toggle[type=button]').eq(1).click()
    cy.get('mat-button-toggle[type=button]').eq(5).click()
    cy.get('input[type=range]').as('range').invoke('val', 5).trigger('change')
    cy.get('mat-button-toggle[type=button]').eq(9).click()
    cy.get('mat-button-toggle[type=button]').eq(13).click()
    cy.get('mat-button-toggle[type=button]').eq(17).click()

    cy.contains('Submit').click()

    cy.get('h1').contains("Here are your results!")
  })
})

describe('Results Functionality', () => {
  it('playlist displays on results page', () => {
    cy.visit('http://localhost:8080')

    cy.get('mat-button-toggle[type=button]').eq(1).click()
    cy.get('mat-button-toggle[type=button]').eq(5).click()
    cy.get('input[type=range]').as('range').invoke('val', 5).trigger('change')
    cy.get('mat-button-toggle[type=button]').eq(9).click()
    cy.get('mat-button-toggle[type=button]').eq(13).click()
    cy.get('mat-button-toggle[type=button]').eq(17).click()

    cy.contains('Submit').click()

    cy.get('iframe').should('exist')
  })
})

describe('Retake Quiz', () => {
  it('clicking retake button takes user to quiz page again', () => {
    cy.visit('http://localhost:8080')

    cy.get('mat-button-toggle[type=button]').eq(1).click()
    cy.get('mat-button-toggle[type=button]').eq(5).click()
    cy.get('input[type=range]').as('range').invoke('val', 5).trigger('change')
    cy.get('mat-button-toggle[type=button]').eq(9).click()
    cy.get('mat-button-toggle[type=button]').eq(13).click()
    cy.get('mat-button-toggle[type=button]').eq(17).click()

    cy.contains('Submit').click()

    cy.contains('Take Quiz Again').click()

    cy.url().should('eq', 'http://localhost:8080/')
  })
})