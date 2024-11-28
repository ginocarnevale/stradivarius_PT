class Cart implements PageObject {

    url: string = '/cart.html';
    productList: string = '#tbodyid';
    deleteProductBtn: string = '#tbodyid > tr > td > a'
    private productsQuantity: number;

    constructor() { }

    countProductsInCart() {
        cy.intercept({ url: '/viewcart', times: 1 }).as('currentProducts');
        this.visit();
        cy.wait('@currentProducts').then((interception) => {
            this.productsQuantity = interception.response.body.Items.length;
        });
    }

    visit() {
        cy.visit(this.url);
    }

    checkIncrease() {
        cy.intercept({ url: '/viewcart', times: 1 }).as('increased');
        this.visit();
        cy.wait('@increased').then((interception) => {
            expect(interception.response.body.Items.length).to.be.eq(this.productsQuantity + 1);
        });
    }

    checkDecrease() {
        cy.intercept({ url: '/viewcart', times: 1 }).as('decreased');
        this.visit();
        cy.wait('@decreased').then((interception) => {
            expect(interception.response.body.Items.length).to.be.eq(this.productsQuantity);
        });
    }

    deleteFirstProduct() {
        this.visit();
        cy.intercept('/deleteitem').as('itemDeleted');
        cy.get(this.deleteProductBtn).eq(0).click();
        cy.wait('@itemDeleted');
    }

}

const CartInstance = new Cart()

export { Cart }

export default CartInstance;