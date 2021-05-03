//Dado un array de números, crea una función para reemplazar el último valor con el número de valores 
//positivos encontrados en el array. 
//Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(arr){
    var positivos = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            positivos++;
        }
    }
    arr[arr.length-1] = positivos;
    return arr;
}
console.log(contarPositivos([1,-7,4,9]));

