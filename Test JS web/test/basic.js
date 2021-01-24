/*
const assert = require("assert")

describe('webdriver.io page', () => {
    xit('should have the right title', () => {
        browser.url('https://webdriver.io')
        asser.strictEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })


	xit('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io')
        let input = $('#search_input_react')
        input.addValue('test')
        browser.pause(4000);
        input.addValue(123)
        browser.pause(2000);
    
        value = input.getValue()
        assert(value === 'test123') // true
    })
	
	 xit('should demonstrate  setValue command', function () {
        browser.url('https://webdriver.io');
        const elem = $('#search_input_react');
        elem.setValue('test123');
        browser.pause(2000);
    })

    xit('should demonstrate the click command', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]')
        browser.pause(2000);
        blogButton.click()
        browser.pause(2000);
        const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        guideButton.click()
        browser.pause(2000);
    })
	
	xit('should demonstrate the getAttribute command', () => {
        browser.url('https://webdriver.io');
        const input = $('#search_input_react');
        let attr = input.getAttribute('title')
		browser.pause(2000);
        console.log("Title attribute is: " + attr) // outputs: "Search"
		browser.pause(2000);


        input.setValue('test123');
		browser.pause(2000);
        attr = input.getAttribute('value');
		browser.pause(2000);
        console.log("Value attribute is: " + attr) // outputs: test123
				
    })
	
	xit('should demonstrate the getLocation function', () => {
        browser.url('https://webdriver.io');
        const logo = $('#search_input_react')
        const location = logo.getLocation();
        console.log(location); 
    
        const xLocation = logo.getLocation('x')
		browser.pause(4000);
        console.log("xLocation" + xLocation);
 
    });

    it('should demonstrate the getText function', () => {
        browser.url('https://webdriver.io');
        const helpButton = $('[href="/help.html"]')
        console.log("Text for serching element is:" + helpButton.getText());
    });
	
})

*/