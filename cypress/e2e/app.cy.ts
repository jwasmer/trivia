describe('app spec', () => {
  beforeEach(() => {
    cy.intercept('https://countries.trevorblades.com/',
    cy.stub()
      .callsFake(req => req.reply({ fixture: 'continents.json' }))).as('continents')
      cy.visit('http://localhost:3000/') 
      cy.wait('@continents')
  })

  it('Should load title text', () => {
    cy.get('[data-cy="title"]').should("exist")
    cy.get('[data-cy="title"]').should('include.text', 'Around the World')
    cy.get('[data-cy="select-game-btn"]').contains('Select Game')
    cy.get('[data-cy="view-scoreboard-btn"]').contains('View Scoreboard')
  })

  it('Should load main page graphic', () => {
    cy.get('[data-cy="earth-gif"]').should("exist")
    cy.get('[data-cy="earth-gif"]').should('have.attr', 'src').should('include','https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')
  })

  it('Should route user to game options page when "select game" button is clicked', () => {
    cy.get('[data-cy="select-game-btn"]').click()
    cy.url().should("equal", "http://localhost:3000/selections")
  })

  it('Should route user to scoreboard page when "view scoreboard" button is clicked', () => {
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.url().should("equal", "http://localhost:3000/scoreboard")
  })
})