//Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, 
//y devolver (return) el mayor. 

function printMenorReturnMayor(arr){
    var menor = arr[0];
    var mayor = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < menor){
            menor = arr[i];
        }else if (arr[i] > mayor){
            mayor = arr[i];
        }
    }
    console.log(menor);
    return mayor;
}

console.log(printMenorReturnMayor([-3,15,-5,80]));

