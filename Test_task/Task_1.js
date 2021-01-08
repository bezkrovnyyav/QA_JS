/* Задание 1
Задан JSON с данными о температуре. 
Нужно вывести ключ, у которого не задано значение. Использовать JS 
http://prntscr.com/wg5haf
*/
let x = {"k1":36.9, "k2":37.7, "k3":null, "k4":37.3, "k5":38.1, "k6":36.3}

for (let value in x){
	if (x[value] === null){
		console.log(value)
	}
}
