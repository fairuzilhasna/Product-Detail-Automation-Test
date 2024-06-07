import {browser, $, expect } from '@wdio/globals';
import findProduct from '../pageobjects/product.page.js';
import DetailPage from '../pageobjects/product-detail.page.js';
import cartPage from '../pageobjects/cart.page.js';
import cartCount from '../pageobjects/cart-count.page.js';
import cartCheckout from '../pageobjects/cart-checkout.js';
import removeItemCart from '../pageobjects/remove-item-cart.page.js'
import wishlistPage from '../pageobjects/wishlist.page.js';


describe ('Product Detail Page', () => {
    it ('user memilih produk', async () => {
        await findProduct.mainPage();
        await findProduct.clickAllProduct();
        await $('a[title="Erigo T-Shirt Sashenka Olive"]').click();

        await expect (DetailPage.openPage);
        await expect ($('h1[class="productView-title"]')).toHaveText('Erigo T-Shirt Sashenka Olive');
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


    it ('user menekan tombol wish list', async () => {
        await DetailPage.openPage();
        await wishlistPage.wishlistButtonPage();

        await expect (browser).toHaveUrl('https://erigostore.co.id/pages/wish-list')
        await expect ($('h1[class="page-header text-left"]')).toHaveText('WISH LIST');
    })


    it.skip ('user menekan tombol chat', async () => {
        await DetailPage.openPage();
        await browser.pause(3000);
        await $('svg[data-spec="button-icon"]').click();

        // Can't call click on element with selector "button[class="chat-toggle chat-toggle--#000000 chat-toggle--icon-button chat-toggle--text-button chat-toggle--bottom-right"]" because element wasn't found
    })


    it.skip ('user menambah kuantitas produk', async () => {
        await DetailPage.openPage();
        await $('button[class="plus btn-quantity"]').click();

        //ini ngga bisa, error:  Element <button type="button" name="plus" data-plus-quantity-quickshop="" class="plus btn-quantity"></button> not interactable
    })


    it.skip ('user mengurangi kuantitas produk', async () => {
        await DetailPage.openPage();
        await $('button[class="plus btn-quantity"]').click();
        await $('button[class="minus btn-quantity"]').click();
    })


    // it ('user memilih produk yang habis stok', async () => {
        
    // })
})