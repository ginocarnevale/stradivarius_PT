declare namespace Cypress {
  interface Chainable {
    captureJsErrors(): Chainable<Element>;
    checkJsErrors(): Chainable<Element>;
    userLogin(user: string, pass: string): Chainable<Element>;
    checkLinks(page: PageObject): Chainable<Element>;
  }
}