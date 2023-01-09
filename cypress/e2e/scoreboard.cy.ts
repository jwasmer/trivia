describe('continents spec', () => {
  beforeEach(() => {
   cy.intercept('https://countries.trevorblades.com/',
    cy.stub()
      .callsFake(req => req.reply({ fixture: 'continents.json' }))).as('continents')
      cy.visit('http://localhost:3000/selections') 
      cy.wait('@continents')
  })