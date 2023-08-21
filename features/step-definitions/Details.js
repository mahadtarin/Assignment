
const creden = require('./creden')
module.exports = {

    get buymoisturizersbutton() { return $('//button[contains(.,"Buy moisturizers")]')},
    get addmoisturizerbutton() { return $('button[onclick="addToCart(\'Boris Almond and Honey\',128)"]')},
    get gotocartbutton() { return $('button[onclick="goToCart()"]')},
    get cartview() { return $('//tbody/tr')},
    get Total() { return $('#total')},
    get Email() { return $('#email')},
    get Date() { return $('#cc-exp')},
    get temperature() { return $('#temperature')},
    get Cardnumber() { return $('#card_number')},
    get cvc() { return $('#cc-csc')},
    get paywithcardbutton() { return $('button[type="submit"]')},
    get paybutton() { return $('//button[contains(.,"Pay INR")]')},
    get buysunscreensbutton() { return $('//button[contains(.,"Buy sunscreens")]')},
    get addsunscreenbutton() { return $('button[onclick="addToCart(\'Vladimir Sun Expert SPF-30\',160)"]')},

    async Gettemptext(){
        await this.temperature.waitForDisplayed()
        return this.temperature.getText()
    },
    async clickmoisturizerbutton() {
        await this.buymoisturizersbutton.waitForDisplayed()
        await this.buymoisturizersbutton.click()
    },
    async clicksunscreensbutton() {
        await this.buysunscreensbutton.waitForDisplayed()
        await this.buysunscreensbutton.click()
    },
    async clickaddmoisturizerbutton() {
        await browser.pause(2000)
        await this.addmoisturizerbutton.waitForDisplayed()
        await this.addmoisturizerbutton.click()
    },
    async clickaddsunscreenbutton() {
        await browser.pause(2000)
        await this.addsunscreenbutton.waitForDisplayed()
        await this.addsunscreenbutton.click()
    },
    async clickgotocartbutton(){
        await this.gotocartbutton.waitForDisplayed()
        await this.gotocartbutton.click()
    },
    async displaycart(){
        await this.cartview.waitForDisplayed()
        return this.cartview
    },
    async displayTotal(){
        await this.Total.waitForDisplayed()
        return this.Total.getText()
    },
    async Enterpaywithcardburron()
    {
        await this.paywithcardbutton.waitForDisplayed()
        await this.paywithcardbutton.click()
    },
    async Entercreden(){
      
        await this.Email.setValue(creden.email)
        await browser.pause(2000)
        await this.Email.keys(['Enter'])
        await browser.pause(5000)
        await this.Cardnumber.keys([`${creden.cardnumber}`])
        await this.Cardnumber.keys(['Enter'])
        await this.Date.keys([`${creden.dated}`])
        await browser.pause(5000)
        await this.Cardnumber.keys(['Enter'])
        await this.cvc.setValue(creden.CVC)
        await browser.pause(5000)
    },
    async Enterpaybutton()
    {
        
        await this.cvc.keys(['Enter'])
        await browser.pause(5000)
    },
    async Iframe() {

        console.log('Iframe element is visible')
        const s = await browser.$(".stripe_checkout_app")
        await browser.pause(5000)
        await browser.switchToFrame(s);
    }
}
