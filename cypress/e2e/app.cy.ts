describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('Should load title text', () => {
    cy.get('[data-cy="title"]').should("exist")
  })

  it('Should load main page graphic', () => {
    cy.get('[data-cy="earth-gif"]').should("exist")
  })

  it('Should route user to game options page when "select game" button is clicked', () => {
    cy.get('[data-cy="select-game-btn"]').click()
    cy.url().should("equal", "http://localhost:3000/play")
  })

  it('Should route user to scoreboard page when "view scoreboard" button is clicked', () => {
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.url().should("equal", "http://localhost:3000/scoreboard")
  })
})