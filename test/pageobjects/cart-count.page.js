import { $, browser } from '@wdio/globals'

class cartCount {
    get cartCountButton () { return $('.wrapper-cartCount') }
    
}

export default new cartCount()