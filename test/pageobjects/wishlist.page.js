import { $, browser } from '@wdio/globals'

class wishlistPage {
    get wishlistButton () { return  $('.wishlist-text') }

    async wishlistButtonPage () {
        await this.wishlistButton.click();
    }
    
}

export default new wishlistPage()