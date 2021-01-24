/*
const assert = require("assert")

describe('webdriver.io page', () => {
	xit('should demonstrate the clickable of element', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]');
        browser.pause(2000);
        let clickable = blogButton.isClickable() // true
        console.log('The elementis clickable: ' + clickable)
    });
	
	xit('should demonstrate the element is displayed', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]')
        let isDisplayed = blogButton.isDisplayed()
        console.log('The elementis displaued: ' + isDisplayed) //true
    });
	
	xit('should demonstrate the element is displayed out of vision', () => {
        browser.url('https://webdriver.io');
		const blogButton = $('[href="/blog/"]');
		let isDisplayedInViewPort = blogButton.isDisplayedInViewPort();
        console.log('The elementis displaued: ' + isDisplayedInViewport); //true
    });
	
	
	xit('should demonstrate the element is displayed', () => {
        browser.url('https://webdriver.io');
        //const viewPort = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        let isGitDisplayed = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
        console.log('The elementis displaued: ' + isGitDisplayed) //false
    })


	xit('should demonstrate the element is enabled', () => {
		browser.url('https://webdriver.io');
		const blogButton = $('[href="/blog/"]');
		let buttonEnabled = blogButton.isEnabled();
        console.log('The element is enabled: ' + buttonEnabled); //true
    });
	
	xit('should demonstrate the element is enabled', () => {
		browser.url('https://webdriver.io');
		const elem = $('#search_input_react');
		
        console.log('The element is focused: ' + elem.isFocused()); //true
		elem.click();
		console.log('The element is focused: ' + elem.isFocused());
    });
	
	xit('should demonstrate scroll to theelement', () => {
		browser.url('https://webdriver.io');
		const tagGit = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
		let scrollToElem = tagGit.scrollIntoView();
        browser.pause(3000); 
		
    });
	
	xit('should demonstrate the screeshot of element ', () => {
        browser.url('https://webdriver.io');
		//browser.saveScreenshot('./test/specs/screenshot.png');
		blogButton = $('[href="/blog/"]');
		blogButton.saveScreenshot('./test/specs/screenshot_button.png');
		console.log("OK")
    });
	
	xit('should demonstrate how switch windows', () => {
        browser.url('https://webdriver.io');
		browser.pause(3000);
        browser.newWindow('http://google.com');
		browser.pause(3000);
		browser.switchWindow('https://webdriver.io');
		browser.pause(3000);
    });
	
	xit('should demonstrate how action is maded', () => {
        browser.url('https://webdriver.io');
		browser.pause(3000);
		browser.waitUntil(() => {
			blogButton = $('[href="/blog/"]');
			return blogButton.isDisplayed();
			}, 5000, 'button is displayed');
     });
	 
	 it('should demonstrate how action is maded', () => {
        browser.url('https://webdriver.io/docs/api.html');
		elem = $('.siteNavGroupActive');
		console.log(elem.getHTML(false));
     });
	 
	 
})
*/