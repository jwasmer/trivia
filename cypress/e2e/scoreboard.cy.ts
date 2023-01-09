describe('continents spec', () => {
  beforeEach(() => {
   cy.intercept('https://countries.trevorblades.com/',
    cy.stub()
      .callsFake(req => req.reply({ fixture: 'africa.json' }))).as('continents')
      cy.visit('http://localhost:3000/') 
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
    cy.get('[data-cy="north-america"]').should('include.text', 'North America: Not attempted!')
    cy.get('[data-cy="south-america"]').should('include.text', 'South America: Not attempted!')
    cy.get('[data-cy="oceania"]').should('include.text', 'Oceania: Not attempted!')
    cy.get('[data-cy="asia"]').should('include.text', 'Asia: Not attempted!')
    cy.get('[data-cy="europe"]').should('include.text', 'Europe: Not attempted!')
    cy.get('[data-cy="africa"]').should('include.text', 'Africa: Not attempted!')
  })

  it('Should display 90% if 9/10 questions are attempted', () => {
    cy.get('[data-cy="select-game-btn"]').click()
    cy.get('[data-cy="Africa"]').click()
    cy.get('[data-cy="flags"]').click()
    for (let i = 0; i < 9; i++) {
      cy.get('#mc-a').click()
      cy.get('[data-cy="next"]').click()
    }
    cy.get('#mc-b').click()
    cy.get('[data-cy="next"]').click()
    cy.get('[data-cy="title"]').click()
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.get('[data-cy="africa"]').should('include.text', '90%')
  })

  it('Should track score between multiple game rounds', () => {
    cy.get('[data-cy="select-game-btn"]').click()
    cy.get('[data-cy="Africa"]').click()
    cy.get('[data-cy="flags"]').click()
    for (let i = 0; i < 9; i++) {
      cy.get('#mc-a').click()
      cy.get('[data-cy="next"]').click()
    }
    cy.get('#mc-b').click()
    cy.get('[data-cy="next"]').click()
    cy.get('[data-cy="title"]').click()
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.get('[data-cy="africa"]').should('include.text', '90%')
    cy.get('[data-cy="title"]').click()
    cy.get('[data-cy="select-game-btn"]').click()
    cy.get('[data-cy="Africa"]').click()
    cy.get('[data-cy="flags"]').click()
    for (let i = 0; i < 10; i++) {
      cy.get('#mc-b').click()
      cy.get('[data-cy="next"]').click()
    }
    cy.get('[data-cy="title"]').click()
    cy.get('[data-cy="view-scoreboard-btn"]').click()
    cy.get('[data-cy="africa"]').should('include.text', '45%')
  })
})