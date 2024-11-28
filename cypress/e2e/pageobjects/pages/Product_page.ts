class Product implements PageObject {

    url: string = '/prod.html'
    addToCartBtn: string = '.col-sm-12 > .btn'

    constructor() { }

    visit(prodNumber) {
        cy.visit(this.url + '?idp_=' + prodNumber);
    }

    addToCart() {
        cy.intercept('/addtocart').as('prodAdded');
        cy.get(this.addToCartBtn).eq(0).click();
        cy.wait('@prodAdded');
    }

}

export { Product }
const ProductInstance = new Product()
export default ProductInstance;