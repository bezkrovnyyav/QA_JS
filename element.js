let x = function resolve(first, second, third) {
    let result = first;
	while (result > third){
		result  = result - second
		console.log (result)
	}
	while (result < first){
		result = result + second
	}
  
	return result;       
}
console.log (x(20, 3, 10)) //нужно отнимать 2 от 1 пока 1 не будет меньше 3. Затем - вернуть назад.
