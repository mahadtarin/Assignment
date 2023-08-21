const { Given, When, Then } = require('@wdio/cucumber-framework');
const d = require('./Details')

Given('User is on the home page', async () => {
    await browser.url('https://weathershopper.pythonanywhere.com/')
    expect(browser).toHaveUrl('https://weathershopper.pythonanywhere.com/')
});

When('User reads the temperarture', async () => {
    console.log(await d.Gettemptext())
});

Then('User should verify the temperature', async () => {
    const temperatureElement = await $('#temperature');
    console.log(await d.Gettemptext())
});

Then('User clicks the desired button', async () => {
    
    const temperatureElement = await $('#temperature');
    if (temperatureElement < 19)
    {
        await browser.pause(2000)
        d.buymoisturizersbutton.waitForDisplayed()
        d.clickmoisturizerbutton()
        await browser.pause(2000)
    }
    else 
    {
        await browser.pause(2000)
        d.buysunscreensbutton.waitForDisplayed()
        d.clicksunscreensbutton()
        await browser.pause(2000)
    }
});

//-------------------------------------------------------------------------------------

Given('User is on Moisturizers page', async () => {
   
    expect(browser).toHaveUrl('https://weathershopper.pythonanywhere.com/moisturizer')
});

When('User adds the moisturizers', async () => {
    await d.clickaddmoisturizerbutton()
});

Then('User should go to the cart', async () => {
    await d.clickgotocartbutton()
    await browser.pause(2000)
});


//-------------------------------------------------------------------------------------

Given('User is on the sunscreen page', async () => {
   
    expect(browser).toHaveUrl('https://weathershopper.pythonanywhere.com/sunscreen')
});

When('User adds the sunscreen', async () => {
    await d.clickaddsunscreenbutton()
});

//-------------------------------------------------------------------------------------

Given('User is on the Cart page', async () => {
    expect(browser).toHaveUrl('https://weathershopper.pythonanywhere.com/cart')
});

When('User goes through the cart', async () => {
    const c = await d.displaycart()
    console.log(c)
});

Then('User should verify the Total Price and click the pay with card button', async () => {
    console.log(await d.displayTotal())
    d.Enterpaywithcardburron()
});

//--------------------------------------------------------------------------------------

Given('User is on charging menu', async () => {
    d.Iframe()
    await browser.pause(3000);
});

When('User adds the credentials', async () => {
    await d.Entercreden()
});

Then('User presses the Pay button', async () => {
   await d.Enterpaybutton()
});