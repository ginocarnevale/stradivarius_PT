class Home implements PageObject {

    url: string = '/index.html';
    productList: string = '.card-block > .card-title > .hrefch';

    constructor() { }

    visit() {
        cy.visit(this.url);
    }
}

const homeInstance = new Home()

export { Home }

export default homeInstance;