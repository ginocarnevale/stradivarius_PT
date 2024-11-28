import Cart from "../pageobjects/pages/Cart_page";
import Home from "../pageobjects/pages/Home_page";
import Product from "../pageobjects/pages/Product_page";

describe('2.Suite Prueba Tecnica', () => {

  it('2.1 Errores de JavaScript', () => {
    cy.captureJsErrors();
    Home.visit();
    cy.checkJsErrors();
  });

  it('2.2 Estados de las paginas', () => {
    cy.checkLinks(Home);
  });

  it('2.3 Validacion del carro de compras', () => {
    cy.userLogin('stradivarius-test@maildrop.cc', 'test123');
    Cart.countProductsInCart();

    Home.visit();
    cy.get(Home.productList).eq(0).click();
    Product.addToCart();

    Cart.checkIncrease();
    Cart.deleteFirstProduct();
    Home.visit();
    Cart.checkDecrease();
  });

});