//Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros 
//positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(inicio, final, sumar){
    var sum = 0;

    for (var i = inicio; i <= final; i++){
        sum += eval(sumar.replace("i", i));
    };

    console.log(sum);
}

sigma(1,6, "3*i+2"); 