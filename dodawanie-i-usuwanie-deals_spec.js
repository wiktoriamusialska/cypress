describe('Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://gamma.hq.ais.pl:4200/customer/portal/');
        cy.get('#username').type('Wiktoria');
        cy.get('#password').type('neverclear');
        cy.get('#loginButton').click();
        cy.visit('http://gamma.hq.ais.pl:4200');
        cy.get('.profile-name').should('have.text', 'Wiktoria Weronika');
        cy.get('[d="M6.74271847,21.1288923 C5.51753367,18.6938782 5.2581179,16.9725523 5.96447116,15.9649148 C7.02400104,14.4534584 9.6996746,15.1410276 10.4036164,14.8378587 C11.1075582,14.5346899 12.9469016,12.7898482 14.0065255,11.9755617 C14.0810059,11.9184355 14.1810432,11.9099567 14.2636601,11.9535697 C16.213451,12.7178432 17.7140118,13.6792729 18.7653425,14.8378587 C19.3850528,16.2354268 19.6355461,18.332438 19.5168224,21.1288923 C8.87380819,21.1560429 17.3120412,21.1459065 6.74271847,21.1288923 Z"]').click();
        cy.get('#menu-link-Deals').click();
        cy.get('#createDealBtn').click();
        cy.get('#mco-a9c5fc3f0-dropdown').click();
        cy.contains("li","London").click({force: true});
        cy.get('#mco-9d163fed0').type('Deal2222');
        cy.get('#mco-911fb8a70').type('DAY222');
        cy.get('#mco-fd3d382400').click();
        cy.get('#mco-ec9b15280-dropdown').click();
        cy.contains("li","Lost").click({force: true});
        cy.get('#mco-0d7ea10e0').type('1234');
        cy.get('#mco-479412f30').type('Transakcja');
        cy.get(':nth-child(14) > :nth-child(2) > date-time-picker > :nth-child(1) > .input-container > .ng-fa-icon > .svg-inline--fa > path').click();
        cy.get('.col-lg-12 > mco-table > .wrapper-container > .controls > .left > .primary').click();
        cy.get('.placeholder').click();
        cy.get('#Business-Entity-search-input').type('ABC');
        cy.get('#row-0 > :nth-child(2)').click();
        cy.get('#mco-f48852dc0-dropdown').click();
        cy.contains("li","Bookrunner").click({force: true});
        cy.get('.foot > .success').click();
        cy.get('.submit-options > :nth-child(4)').click({force:true});
        cy.get('.foot > .success').click();
        cy.get('.foot > .success').click();
        cy.get('.action-parent-button').click();
        cy.contains("li","Delete").click({force: true});
        cy.get('#workflow-add-comment-field').type('Zbyt duża liczba dealsów');
        cy.contains("button","Confirm").click({force: true});
        cy.contains("span","Return to Classic MCO").click({force: true}); 
        cy.contains("a","Logout").click({force: true}); 
    })
  })


  //* url contain , po drzewku zawiera,  wypełnanie pól bez nazwy automatyzacja, upewnienie sie ze cos zawiera, bardziej uniwersalne testy/