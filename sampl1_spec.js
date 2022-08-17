describe('Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://gamma.hq.ais.pl:4200/customer/portal/');
        cy.get('#username').type('Wiktoria')
        cy.get('#password').type('neverclear')
        cy.get('#loginButton').click()
        cy.visit('http://gamma.hq.ais.pl:4200');
        cy.get('#menu-tab-Know-Your-Risk').click();
        cy.contains("span","Site Search").click({force: true}); 
        cy.get('div.search-input > .search-input').type('company');
        cy.get('#quick-link-0 > .link-label').click();
        cy.contains("span","Return to Classic MCO").click({force: true}); 
        cy.contains("a","Switch to New MCO").click({force: true}); 
        cy.visit('http://gamma.hq.ais.pl:4200');
        cy.get('#menu-tab-Tools').click();
        cy.contains("button","Create New Process Configuration").click({force: true}); 
        cy.get('#mco-f76821180').type('Deals3');
        cy.get('#mco-3347237b0-dropdown').click();
        cy.get('#mco-3347237b0-Process-1').click();
        cy.get('#mco-2c7634c40').click();
        cy.contains("td","Smith, Rob").click({force: true});
        cy.get('#mco-560c21bc0').type('ABCD');
        cy.get('#mco-43919cd60-dropdown').click();
        cy.contains("li","Deal update").click({force: true});
        cy.get('.profile-name').should('have.text', 'Wiktoria Weronika');
        cy.get('#mco-150656d90').type('ABCD');
        cy.get('#mco-c956bfb80').type('XYZ');
        cy.get('.oldUi-switch > .link').click();
    })
  })