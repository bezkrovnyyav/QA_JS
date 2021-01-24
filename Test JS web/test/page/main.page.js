class MainPage{
	get username(){
		return $('#search_input_react')
	}
	
	setUserName(value){
		this.username.addValue(value)
	}
	
}

module.exports = new MainPage()