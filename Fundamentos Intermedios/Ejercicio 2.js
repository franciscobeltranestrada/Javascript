//Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto 
//(multiplicación) de todos los enteros positivos (incluyendo el número dado). 
//Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

function factorial (n) {
	var número = 7;
    var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}