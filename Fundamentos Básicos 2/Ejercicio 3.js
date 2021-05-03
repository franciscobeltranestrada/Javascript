//Crea una función para un array de números. La función debería imprimir (print) 
//el penúltimo valor y devolver (return) el primer valor impar.

function printPenúltimoReturnPrimerImpar(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
console.log(printPenúltimoReturnPrimerImpar([9,5,6,8,1]));

