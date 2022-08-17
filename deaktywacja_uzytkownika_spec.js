describe('Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://gamma.hq.ais.pl:4200/customer/portal/');
        cy.get('#username').type('cco1admin');
        cy.get('#password').type('neverclear');
        cy.get('#loginButton').click();
        cy.get('strong').should('have.text', ' cco1admin ');
        cy.get('p').get('strong').should('have.text',' cco1admin ');
        cy.get('#mco_prinav > ul > :nth-child(9) > a').click();
        cy.contains("a","Users").click({force: true});
        cy.get('tbody > :nth-child(10) > :nth-child(1) > a').click();
        cy.get('#_deactivateId').click();
        cy.get('#ext-comp-1004').type('Zbyt duża liczba kont');
        cy.contains("td","Confirm").click({force: true});   //* zawieszenie konta */
        
    })
  })