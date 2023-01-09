describe('continents spec', () => {
  beforeEach(() => {
   cy.intercept('https://countries.trevorblades.com/',
    cy.stub()
      .callsFake(req => req.reply({ fixture: 'africa.json' }))).as('continents')
      cy.visit('http://localhost:3000/selections') 
      cy.wait('@continents')
  })

  it('Should have score fields for each continent', () => {
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.get('[data-cy="north-america"]').should("exist")
    cy.get('[data-cy="south-america"]').should("exist")
    cy.get('[data-cy="oceania"]').should("exist")
    cy.get('[data-cy="asia"]').should("exist")
    cy.get('[data-cy="europe"]').should("exist")
    cy.get('[data-cy="africa"]').should("exist")
  })

  it('Should display the text Not Attempted! if no questions have been attempted', () => {
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.get('[data-cy="north-america"]').contains('Not Attempted!')
    cy.get('[data-cy="south-america"]').contains('Not Attempted!')
    cy.get('[data-cy="oceania"]').contains('Not Attempted!')
    cy.get('[data-cy="asia"]').contains('Not Attempted!')
    cy.get('[data-cy="europe"]').contains('Not Attempted!')
    cy.get('[data-cy="africa"]').contains('Not Attempted!')
  })

  it('Should correctly update the score as questions are attempted', () => {
    cy.get('[data-cy="select-game-btn"]').click()
    cy.get('[data-cy="Africa"]').click()
    cy.get('[data-cy="flags"]').click()
    for (let i = 0; i < 9; i++) {
      cy.get('[data-cy="a"]').click()
      cy.get('[data-cy="next"]').click()
    }
    cy.get('[data-cy="b"]').click()
    cy.get('[data-cy="next"]').click()
    cy.get('[data-cy="title"]').click()
    cy.get('[data-cy="africa"]').contains("90%")
  })
})