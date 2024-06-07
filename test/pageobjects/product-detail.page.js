class DetailPage {
    get addProduct () { return $('#product-add-to-cart') }

    async addProductToCart () {
        await this.addProduct.click();
    }

    async openPage () {
        await browser.url('https://erigostore.co.id/products/erigo-t-shirt-sashenka-olive')
    }
}

export default new DetailPage