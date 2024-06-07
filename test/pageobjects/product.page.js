class findProduct {
    get clickProduct () { return $('li[class="menu-lv-item menu-lv-1 text-left no-megamenu"]') }

    async clickAllProduct () {
        await this.clickProduct.click();
    }

    async mainPage () {
        await browser.url('https://erigostore.co.id')
    }
}

export default new findProduct