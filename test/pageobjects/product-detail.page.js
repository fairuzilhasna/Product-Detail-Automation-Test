class DetailPage {
    get clickProduct () { return $('li[class="menu-lv-item menu-lv-1 text-left no-megamenu"]') }
    get chooseProduct () { return $('li[p-handle="erigo-t-shirt-sashenka-olive"]') }
    get productTitle () { return $('h1[class="productView-title"]')}
    get addProduct () { return $('#product-add-to-cart') }
    get cartCountButton () { return $('.wrapper-cartCount') }
    get condition () { return $('label[for="sidebar_cart_conditions"]') }
    get CheckoutButton () { return  $('#cart-sidebar-checkout') }
    get checkoutPage () { return $('#checkout-main') }
    get cartButton () { return $('.cart-text') }
    get previewCartItem () { return $ ('.previewCartItem-name.link-underline') }
    get removeButton () { return  $('.previewCartItem-remove') }
    get emptyCheckout () { return $('a[class="button button-2 button-continue"]') }
    get cartSidebar () { return $('#halo-cart-sidebar') }
    get closeSidebar () { return $('button[class="halo-sidebar-close button-effect"]') }
    get wishlistButton () { return  $('.wishlist-text') }
    get wishlistHeader () { return $('h1[class="page-header text-left"]') }
    get plus () { return $('#ProductSection-template--21184463143225__main > div.container.productView-container > div > div > div.halo-productView-right.productView-details.clearfix > div > div:nth-child(7) > div.quantity_selector > quantity-input > div > button.plus.btn-quantity') }
    get minus () { return $('#ProductSection-template--21184463143225__main > div.container.productView-container > div > div > div.halo-productView-right.productView-details.clearfix > div > div:nth-child(7) > div.quantity_selector > quantity-input > div > button.minus.btn-quantity') }
    get quantityProduct () { return $('#quantity-7129272778936-2') }
    get chat () { return $('#ShopifyChat') } 


    async clickAllProduct () {
        await this.clickProduct.click();
    }
    async chooseOneProduct () {
        await this.chooseProduct.click();
    }
    async addProductToCart () {
        await this.addProduct.click();
    }
    async conditionButton () {
        await this.condition.click();
    }
    async cartCheckoutButton () {
        await this.CheckoutButton.click();
    }
    async cartButtonPage () {
        await this.cartButton.click();
    }
    async removeItemCartButton () {
        await this.removeButton.click();
    }
    async emptyCheckoutButton () {
        await this.emptyCheckout.click();
    }
    async closeSidebarButton () {
        await this.closeSidebar.click();
    }
    async wishlistButtonPage () {
        await this.wishlistButton.click();
    }
    async plusButton () {
        await this.plus.click()
    }
    async minusButton () {
        await this.minus.click()
    }
    async chatButton () {
        await this.chat.click()
    }
    
    async mainPage () {
        await browser.url('https://erigostore.co.id')
    }
    async openPage () {
        await browser.url('https://erigostore.co.id/products/erigo-t-shirt-sashenka-olive')
    }
}

export default new DetailPage