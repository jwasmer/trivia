describe('continents spec', () => {
  beforeEach(() => {
   cy.intercept('https://countries.trevorblades.com/',
    cy.stub()
      .callsFake(req => req.reply({ fixture: 'continents.json' }))).as('continents')
      cy.visit('http://localhost:3000/selections') 
      cy.wait('@continents')
  })
   
  it('should display all elements on the Home page', () => {
    cy.get('[data-cy="title"]').contains('Trivia Game')
    cy.get('[data-cy="earth-gif"]').should('have.attr', 'src').should('include','https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')
    cy.get('.continent-button').contains('Antarctica')
  });
  it('Should display category buttons for category options', () => {
    cy.get('[data-cy="title"]').contains('Trivia Game')
    cy.get('[data-cy="earth-gif"]').should('have.attr', 'src').should('include','https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')
    cy.get('.continent-button').click()
    cy.get('[name="emoji"]').contains('Flags')
    cy.get('[name="capitols"]').contains('Capitols')
    cy.get('[name="languages"]').contains('Languages')
    cy.get('[name="emoji"]').click()
  });
  it('Should display trivia game mode', () => {
    cy.get('[data-cy="title"]').contains('Trivia Game')
    cy.get('[data-cy="earth-gif"]').should('have.attr', 'src').should('include','https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')
    cy.get('.continent-button').click()
    cy.get('[name="emoji"]').click()
    cy.location("pathname").should("eq", "/play")
  })
})

