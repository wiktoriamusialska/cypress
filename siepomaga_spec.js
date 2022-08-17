describe('Się pomaga', () => {
    it('"Add donation to cart"', () => {
        cy.visit('https://www.siepomaga.pl/ukraina');
        cy.contains("a","Wesprzyj").click({force: true}); 
        cy.get(':nth-child(6) > .payment-choose-amount-component__fixed-value-inputs__element__chip').click()
        cy.get('#amount_text_input').type('10');
        cy.get("input[name='payment[signature]']").type('Nieznany');
        cy.get('.payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text').click()
        /**to jest komentarz */
        cy.get("input[name='cart[payer_email]']").type('victoria_1@ais.pl');
        //*cy.get('[data-testid="amount-row-value-normal-donation"]').should('have.text','10 zł')*/;
        //*cy.contains("span","10 zł").click({force: true})*/; 
        cy.contains("div","Przelew").click({force:true});
        cy.get(':nth-child(1) > :nth-child(3) > .payment-choose-method-box-component > .payment-choose-method-box-component__container > .payment-choose-method-box-component__image').click();
        cy.contains("label","Akceptuję").click({force:true});
        //*cy.contains("button","Przejdź do płatności").click({force:true});*/
    })
  })