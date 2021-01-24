const mainPage = require('../page/main.page.js')
const docsPage = require('../page/docs.page.js')

describe('Home task for lesson #29', () => {
	xit('addValue', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
		mainPage.setUserName('type this method')
        browser.pause(3000);
		console.log('IT OK')
    });
	
	xit('addValue', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
		mainPage.setUserName('Another method')
        browser.pause(3000);
    });
	
	it('click the button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
		docsPage.clickDocsButton()
        browser.pause(3000);
    });
})