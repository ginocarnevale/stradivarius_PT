/// <reference types="cypress" />

import Home from "../e2e/pageobjects/pages/Home_page";
import LoginModal from "../e2e/pageobjects/components/Login_modal";
import Navbar from "../e2e/pageobjects/components/Navbar";

// Todos los comandos aquí agregados son para la futura reutilizacion del código en futuros casos de prueba 

Cypress.Commands.add("captureJsErrors", () => {
      cy.on('window:before:load', (win) => {
            cy.stub(win.console, 'error').as('jsErrors');  // De una forma similar se podría comprobar la existencia de Warnings
      });
})

Cypress.Commands.add("checkJsErrors", () => {
      cy.get('@jsErrors').should('not.be.called');
});

Cypress.Commands.add("userLogin", (user, pass) => {
      Home.visit();
      cy.get(Navbar.loginButton).click();
      cy.get(LoginModal.usernameTxt).type(user, { delay: 0, timeout: 1000 }).wait(500);
      cy.get(LoginModal.passwordTxt).type("test123", { delay: 100, timeout: 1000 }).then(() => {
            cy.get(LoginModal.sumbitBtn).click();
      });
      cy.get(Navbar.userName).should('include.text', user);
});

 /*   Segun la documentacion, cy.request()  ya valida que el status code sean SOLAMENTE del tipo 200 o 3xx 
   (https://docs.cypress.io/api/commands/request#Requirements) por lo que no serian necesarias las comprobaciones
   explicitas de los response codes. En el caso de un status_code=400, este test fallaría.  
 */
Cypress.Commands.add("checkLinks", (page: PageObject) => {
      page.visit();
      cy.get('a').each((element) => {
            cy.request(element.prop('href'));
      })
});

