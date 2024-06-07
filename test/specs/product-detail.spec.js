import {browser, $, expect } from '@wdio/globals';
import DetailPage from '../pageobjects/product-detail.page.js';
import cartPage from '../pageobjects/cart.page.js';
import cartCount from '../pageobjects/cart-count.page.js';
import cartCheckout from '../pageobjects/cart-checkout.js';
import removeItemCart from '../pageobjects/remove-item-cart.page.js'


describe ('Product Detail Page', () => {
    it ('user memilih produk', async () => {
        await DetailPage.openPage();

        const productSelected = await $('[for="option-7129272778936-Size-0"]');
        await productSelected.click();

        await expect(productSelected).toBeDisplayed();
    }) 


    it ('user menambahkan produk ke keranjang', async () => {
        await DetailPage.openPage();
        await browser.scroll(0, 300);
        await DetailPage.addProductToCart();

        await expect(cartCount.cartCountButton).toHaveText('1 items');
    })


    it ('user menghapus produk dari keranjang', async () => {
        await DetailPage.openPage();
        await browser.scroll(0, 300);
        await DetailPage.addProductToCart();
        await removeItemCart.removeItemCartButton();

        await expect(cartCount.cartCountButton).toHaveText('0 items');
    })


    it ('user menekan tombol checkout', async () => {
        await DetailPage.openPage();
        await browser.scroll(0, 300);
        await DetailPage.addProductToCart();
        await $('label[for="sidebar_cart_conditions"]').click();
        await cartCheckout.cartCheckoutButton();

        await expect ($('#checkout-main')).toBeDisplayed();
    })


    it ('user menekan tombol check out saat tidak ada produk di keranjang' , async () => {
        await DetailPage.openPage();
        await cartPage.cartButtonPage();
        await removeItemCart.removeItemCartButton();
        await $('a[class="button button-2 button-continue"]').click();

        await expect (DetailPage.openPage);
    })


    it ('user membuka keranjang', async () => {
        await DetailPage.openPage();
        await cartPage.cartButtonPage();

        await expect ($('#halo-cart-sidebar')).toBeDisplayed();
    })


    it ('user menutup keranjang', async () => {
        await DetailPage.openPage();
        await cartPage.cartButtonPage();
        await browser.pause(2000);
        await $('button[class="halo-sidebar-close button-effect"]').click();

        await expect ($('#halo-cart-sidebar')).not.toBeDisplayed();
    })


    it.skip ('user menambah kuantitas produk', async () => {
        await browser.url('https://erigostore.co.id/products/erigo-t-shirt-sashenka-olive');
        await $('button[class="plus btn-quantity"]').click();

        //ini ngga bisa, error:  Element <button type="button" name="plus" data-plus-quantity-quickshop="" class="plus btn-quantity"></button> not interactable
    })


    it.skip ('user mengurangi kuantitas produk', async () => {
        await browser.url('https://erigostore.co.id/products/erigo-t-shirt-sashenka-olive');
        await $('button[class="plus btn-quantity"]').click();
        await $('button[class="minus btn-quantity"]').click();
    })


    // it ('user memilih produk yang habis stok', async () => {
        
    // })
})