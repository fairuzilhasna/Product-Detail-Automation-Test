import { $, browser } from '@wdio/globals'

class removeItemCart {
    get removeButton () { return  $('.previewCartItem-remove') }

    async removeItemCartButton () {
        await this.removeButton.click();
    }
    
}

export default new removeItemCart()