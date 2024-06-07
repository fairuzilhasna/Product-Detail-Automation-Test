import { $, browser } from '@wdio/globals'

class cartPage {
    get cartButton () { return $('.cart-text') }

    async cartButtonPage () {
        await this.cartButton.click();
    }
    
}

export default new cartPage()