describe('continents spec', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'https://countries.trevorblades.com/',
      body: {
        query: `
      query {
          continents {
              code 
            	name
            countries { 
              code
              name
              emoji
              capital
              currency
              states {
                name
              }
              languages {
                name
                native
              }
            } 
          }
        }
      `
      }
    })
    cy.visit("http://localhost:3000/play")
  })
  it('Should have a game title', () => {
    cy.get('[data-cy="title"]').contains('Trivia Game')
  });
  it('Should route user to the categories page of specific continent', () => {
    cy.get('[href="/play/AF"] > button').click()
    cy.visit("http://localhost:3000/play/AF")
  })
})
