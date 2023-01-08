// import { aliasMutation, hasOperationName } from "../../src/graphql-test-utils";

describe('continents spec', () => {
  beforeEach(() => {
    // cy.visit("http://localhost:3000/play")
    // cy.intercept('POST', 'https://countries.trevorblades.com/graphql', (req) => {
    //   aliasMutation(req, 'Continents');
    // });
    // cy.intercept('POST', 'https://countries.trevorblades.com/graphql', (req) => {
    //   aliasMutation(req, 'Continents');
    //   if (hasOperationName(req, 'Continents')) {
    //   }
    // })
    // cy.intercept('POST', 'https://countries.trevorblades.com/graphql', (req) => {
    //   aliasMutation(req, 'Continents')
    
    //   if (hasOperationName(req, 'Continents')) {
    //     req.alias = 'Continents'
    //     req.reply({
    //       fixture: 'continents.json'
    //     })
    //   }
    // })
    // cy.intercept(
    //   {
    //     method: 'POST',
    //     url: '/',
    //     headers: {
    //       operationName: 'getContinents',
    //     }
    //   },
    //   {
    //     fixture: 'continents.json'
    //   }
    // )
    cy.intercept('https://countries.trevorblades.com/').as('Continents')
    cy.visit('http://localhost:3000/play')
    cy.wait('@Continents')
    // cy.fixture('continents.json').as('Continents')
  })
    // cy.intercept('POST', 'https://countries.trevorblades.com/graphql', req => {
    //   req.reply({
    //     statusCode: 200,
    //     fixture: 'continents.json'
    //   })
    // })
   
  it('should display all elements on the Home page', () => {
    cy.visit('http://localhost:3000/play')
    cy.get('[data-cy="earth-gif"]').should('have.attr', 'src').should('include','https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')
    cy.get('[data-cy="title"]').contains('Trivia Game')
    cy.get('.continent-buttons > div > :nth-child(1)')
    // cy.wait('@Continents')
    //   .get('[data-cy="title"]').contains('Trivia Game')
    //   .get('button').contains('Antarctica')
      
  });
  // it('Should have a game title', () => {
  //   cy.get('[data-cy="title"]').contains('Trivia Game')
  // });
  // it('Should display continent buttons for each of the continents', () => {
  //   cy.get('div > :nth-child(1)').contains('Africa')
  //   cy.get('div > :nth-child(2)').contains('Antarctica')
  //   cy.get('div > :nth-child(3)').contains('Asia')
  //   cy.get('div > :nth-child(4)').contains('Europe')
  //   cy.get('div > :nth-child(5)').contains('North America')
  //   cy.get('div > :nth-child(6)').contains('Oceania')
  //   cy.get('div > :nth-child(7)').contains('South America')
  // });
  // it('Should display category buttons for category options', () => {
  //   // cy.get('.continent-buttons').click({ multiple: true })
  //   cy.get('.continent-buttons > div > :nth-child(1)').click()
  //   cy.get('[name="emoji"]').contains('Flags')
  //   cy.get('[name="capitols"]').contains('Capitols')
  //   cy.get('[name="languages"]').contains('Languages')
  // });
  // it('Should display trivia game mode', () => {
  //   cy.get('.continent-buttons > div :nth-child(1)').click()
  //   // cy.get('.category-buttons').click({ multiple: true})
  //   cy.get('[name="emoji"]').click()
  // })
})

