describe('continents spec', () => {
  beforeEach(() => {
    cy.intercept('https://countries.trevorblades.com/').as('continents')
    cy.visit('http://localhost:3000/play')
    cy.wait('@continents').then((interception) => {
      body: {
      fixture: 'continents.json'
     }
    })
    // cy.request({
    //   method: 'POST',
    //   url: 'https://countries.trevorblades.com/',
    //   body: {
    //     query: `
    //   query {
    //       continents {
    //           code 
    //         	name
    //         countries { 
    //           code
    //           name
    //           emoji
    //           capital
    //           currency
    //           states {
    //             name
    //           }
    //           languages {
    //             name
    //             native
    //           }
    //         } 
    //       }
    //     }
    //   `
    //   }
    // })
    // cy.visit("http://localhost:3000/play")
  })
  it('Should have a game title', () => {
    cy.get('[data-cy="title"]').contains('Trivia Game')
  });
  it('Should display continent buttons for each of the continents', () => {
    cy.get('div > :nth-child(1)').contains('Africa')
    cy.get('div > :nth-child(2)').contains('Antarctica')
    cy.get('div > :nth-child(3)').contains('Asia')
    cy.get('div > :nth-child(4)').contains('Europe')
    cy.get('div > :nth-child(5)').contains('North America')
    cy.get('div > :nth-child(6)').contains('Oceania')
    cy.get('div > :nth-child(7)').contains('South America')
  });
  it('Should display category buttons for category options', () => {
    cy.get('.continent-buttons > div').click({ multiple: true})
    cy.get('[name="emoji"]').contains('Flags')
    cy.get('[name="languages"]').contains('Languages')
    cy.get('[name="capitols"]').contains('Capitols')
  });
  it('Should display trivia game mode', () => {
    cy.get('.continent-buttons > div').click({ multiple: true})
    cy.get('.category-buttons').click({ multiple: true})
  })
})

