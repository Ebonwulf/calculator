//basic operations test
describe('basic calculations', () => {
  it('can perform basic multiplication', () => {
    //arrange
    cy.visit('http://127.0.0.1:5500/index.html');
    //act
    cy.get('[data-number=nine]').click();
    cy.get('[data-action=multiply]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-action=equals]').click();
    //assert
    cy.get('.output').should('have.text', 54);
  });
});

//basic operations-multiple digits
describe('basic calculations - multiple digits', () => {
  it('can perform basic addition with multiple numbers', () => {
    //arrange
    cy.visit('http://127.0.0.1:5500/index.html');
    //act
    cy.get('[data-number=nine]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-action=add]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-action=equals]').click();
    //assert
    cy.get('.output').should('have.text', 162);
  });
});

//chained operations eg. 9/10*4+62
describe('chained calculations - multiple digits test', () => {
  it('can perform chained with multiple numbers and operators', () => {
    //arrange
    cy.visit('http://127.0.0.1:5500/index.html');
    //act
    cy.get('[data-number=nine]').click();
    cy.get('[data-action=multiply]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-action=add]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-action=multiply]').click();
    cy.get('[data-number=six]').click();
    cy.get('[data-action=equals]').click();
    //assert
    cy.get('.output').should('have.text', 90);
  });
});

//extras/validation eg. can't put multiple decimal points
describe('single decimal test', () => {
  it('only allows one decimal point per number', () => {
    //arrange
    cy.visit('http://127.0.0.1:5500/index.html');
    //act
    cy.get('[data-number=six]').click();
    cy.get('[data-action=decimal]').click();
    cy.get('[data-number=nine]').click();
    cy.get('.output').should('have.text', 6.9);
  });
});
