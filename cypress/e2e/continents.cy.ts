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
  it('Should display buttons for each of the continents', () => {
    cy.get('[href="/play/AF"] > button').contains('Africa')
    cy.get('[href="/play/AN"] > button').contains('Antarctica')
    cy.get('[href="/play/AS"] > button').contains('Asia')
    cy.get('[href="/play/EU"] > button').contains('Europe')
    cy.get('[href="/play/NA"] > button').contains('North America')
    cy.get('[href="/play/OC"] > button').contains('Oceania')
    cy.get('[href="/play/SA"] > button').contains('South America')
  })
  it('Should route user to the categories page of specific continent', () => {
    cy.get('[href="/play/AF"] > button').click()
    cy.visit("http://localhost:3000/play/AF")
  })
})
