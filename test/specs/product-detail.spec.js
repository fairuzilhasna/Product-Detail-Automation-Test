import {browser, expect } from '@wdio/globals';
import DetailPage from '../pageobjects/product-detail.page.js';



describe ('Product Detail Page', () => {
    it ('user memilih produk', async () => {
        await DetailPage.mainPage();
        await DetailPage.clickAllProduct();
        await browser.scroll(0, 150)
        await DetailPage.chooseOneProduct();

        await expect (DetailPage.openPage);
        await expect (DetailPage.productTitle).toHaveText('Erigo T-Shirt Sashenka Olive');
    }) 


    it ('user menambahkan produk ke keranjang', async () => {
        await DetailPage.openPage();
        await browser.scroll(0, 300);
        await DetailPage.addProductToCart();

        await expect (DetailPage.cartCountButton).toHaveText('1 items');
        await expect (DetailPage.previewCartItem)===(DetailPage.productTitle);
    })


    it ('user menghapus produk dari keranjang', async () => {
        await DetailPage.openPage();
        await browser.scroll(0, 300);
        await DetailPage.addProductToCart();
        await DetailPage.removeItemCartButton();

        await expect (DetailPage.cartCountButton).toHaveText('0 items');
    })


    it ('user menekan tombol checkout', async () => {
        await DetailPage.openPage();
        await browser.scroll(0, 300);
        await DetailPage.addProductToCart();
        await DetailPage.conditionButton();
        await DetailPage.cartCheckoutButton();

        await expect (DetailPage.checkoutPage).toBeDisplayed();
    })


    it ('user menekan tombol check out saat tidak ada produk di keranjang' , async () => {
        await DetailPage.openPage();
        await DetailPage.cartButtonPage();
        await DetailPage.removeItemCartButton();
        await DetailPage.emptyCheckoutButton();

        await expect (browser).toHaveUrl('https://erigostore.co.id/products/erigo-t-shirt-sashenka-olive');
    })


    it ('user membuka keranjang', async () => {
        await DetailPage.openPage();
        await DetailPage.cartButtonPage();

        await expect (DetailPage.cartSidebar).toBeDisplayed();
    })


    it ('user menutup keranjang', async () => {
        await DetailPage.openPage();
        await DetailPage.cartButtonPage();
        await browser.pause(2000);
        await DetailPage.closeSidebarButton();

        await expect (DetailPage.cartSidebar).not.toBeDisplayed();
    })


    it ('user menekan tombol wish list', async () => {
        await DetailPage.openPage();
        await DetailPage.wishlistButtonPage();

        await expect (browser).toHaveUrl('https://erigostore.co.id/pages/wish-list')
        await expect (DetailPage.wishlistHeader).toHaveText('WISH LIST');
    })


    it ('user menambah kuantitas produk', async () => {
        await DetailPage.openPage();
        await DetailPage.plusButton();

        await expect (DetailPage.quantityProduct).toHaveValue('2');
    })


    it ('user mengurangi kuantitas produk', async () => {
        await DetailPage.openPage();
        await DetailPage.plusButton();
        await DetailPage.minusButton();

        await expect (DetailPage.quantityProduct).toHaveValue('1');
    })


    it ('user menekan tombol chat', async () => {
        await DetailPage.openPage();
        await DetailPage.chatButton();
        await browser.pause(2000);

        //await expect (DetailPage.chatButton).toBeClickable();
    })
})
