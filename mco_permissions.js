describe('Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://gamma.hq.ais.pl:4200/');
        cy.get('#username').type('cco1admin');
        cy.get('#password').type('neverclear');
        cy.get('#loginButton').click();
        cy.get('strong').should('have.text', ' cco1admin ');
        cy.contains("a","Admin").click({force: true});
        cy.get('#mco_secnav').contains('a','Users').click().wait(1000);
        cy.contains('a','CCO1Admin, CCO1Admin').click();
        cy.contains('a','Group Membership').click();
        cy.get('.portlet-section-body:nth-child(1) > td:nth-child(1)').click();
        //*cy.get('.portlet-section-body').contains('a','Admin').click();
        //*cy.get('#mco_secnav').contains('a','Permissions').click();
        //*cy.get('#portlet-Group-1__Group-2 > #mco_secnav li:nth-child(3) > a').get('#mco_secnav').get('ul').get('li').contains('a','Permissions').click();
        //*cy.get('.portlet-mco-sectional').get('#mco_secnav').get('li:nth-child(3) > a').contains('a','Permissions').click();
        cy.get('#portlet-Group-1__Group-2 > #mco_secnav li:nth-child(3) > a').click();
        cy.get('#_updateRolesId').click();
        cy.get('#listSelectAllBox').click();
        cy.get('#filter_roles').type('redirect');
        cy.get('#filter_button').click();
        // cy.get('#list > tbody > tr:nth-child(491) > td:nth-child(1) > input[type=checkbox]').uncheck();
       // cy.get('#list').get('tbody').get('tr').contains('redirectUserLoginToNewUI').get('td').get('input').uncheck();
        cy.get('tbody > tr:nth-child(491) > td:nth-child(2)').uncheck()
        // y.get('[type="checkbox"]').uncheck();
        //*cy.contains("a","Admin").click({force: true});
        //*cy.get('#portlet-User-1__User-2 > #mco_secnav > ul > :nth-child(2) > a').click();
        //*cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
        //*cy.get('#portlet-Group-1__Group-2 > #mco_secnav > ul > :nth-child(3) > a').click();
        //*cy.get('[style="padding-left: 2px; padding-top: 5px; padding-bottom: 5px; text-align:right;"] > #_updateRolesId').click();
        //*cy.get('#listSelectAllBox').click();
        //*cy.get('#filter_roles').type('redirect');
        //*cy.get('#filter_button').click();
        //*cy.get('[type="checkbox"]').last().uncheck();
        //*cy.get('[style="cursor: pointer;"] > [style="width:20px;"] > input').dblclick();*/
        //*cy.get('[style="cursor: pointer;"] > [style="width:20px;"] > input').click();*/
        //*cy.contains("input","selected").click({force: true});*/
        //*cy.contains("checkbox","selected").click({force: true});*/
        //*cy.get('[style="cursor: pointer;"] > [style="width:20px;"] > input').click();*/
       //* <input name="selected" type="checkbox" value="C360365DABB3049AE0530101007F1B50"></input>*/
    })
  })
  