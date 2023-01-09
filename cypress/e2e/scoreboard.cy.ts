describe('continents spec', () => {
  beforeEach(() => {
   cy.intercept('https://countries.trevorblades.com/',
    cy.stub()
      .callsFake(req => req.reply({ fixture: 'continents.json' }))).as('continents')
      cy.visit('http://localhost:3000/selections') 
      cy.wait('@continents')
  })

  it('Should have score fields for each continent', () => {
    cy.get('[data-cy="north-america"]').should("exist")
    cy.get('[data-cy="south-america"]').should("exist")
    cy.get('[data-cy="oceania"]').should("exist")
    cy.get('[data-cy="asia"]').should("exist")
    cy.get('[data-cy="europe"]').should("exist")
    cy.get('[data-cy="africa"]').should("exist")
  })

  
})