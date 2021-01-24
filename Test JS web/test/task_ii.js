describe.skip('webdriver.io page', () => {
	it('Task_#_2', () => {
		
        browser.url('https://webdriver.io/docs/api.html');
		const elem = $('//*[text()="JSONWire protocol"]');
		let attr = elem.getAttribute('href');
		browser.newWindow(attr);
		browser.pause(2000);
		browser.switchWindow(attr);
		let linkHome = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
		console.log('The Home button is visible for the user: ' + linkHome.isDisplayed());
		browser.switchWindow('https://webdriver.io/docs/api.html');
		const description = $('.postHeaderTitle');
		description.waitUntil(() => {
			const description = $('.postHeaderTitle');
			return description.getText() == 'API Docs';
		}, 3000, 'The title is displayed correctly');
		description.saveScreenshot('./test/specs/screeshot_api_page.png');
		let twitterLink = $('#footer [href="https://twitter.com/webdriverio"]');
		console.log ("The result of the command is Displayed is: ", twitterLink.isDisplayed());
		console.log ("The result of the command is isDisplayedInViewport is: ", twitterLink.isDisplayedInViewport());
		twitterLink.scrollIntoView();
		console.log ("The result of the command is Displayed is: ", twitterLink.isDisplayed());
		console.log ("The result of the command is isDisplayedInViewport is: ", twitterLink.isDisplayedInViewport());
		let blogButton = $('[href="/blog/"]')
        browser.pause(2000);
        blogButton.click();
		console.log('The button is focused: ', blogButton.isFocused())
				
    });
});