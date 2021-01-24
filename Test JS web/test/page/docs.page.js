class DocsPage{
	get docsbutton(){
		return $('[href="/docs/gettingstarted.html"]')
	}
	
	clickDocsButton(value){
		this.docsbutton.click()
	}
	
}

module.exports = new DocsPage()