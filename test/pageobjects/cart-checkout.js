import { $, browser } from '@wdio/globals'

class cartCheckout {
    get cartButton () { return  $('#cart-sidebar-checkout') }

    async cartCheckoutButton () {
        await this.cartButton.click();
    }
    
}

export default new cartCheckout()