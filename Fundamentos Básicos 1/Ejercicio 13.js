//De Número a String: Escribe una función que tome un array de números y reemplace cualquier 
//valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], 
//tu función devolverá [‘Dojo’,‘Dojo’,2].

function reemplazarNegativosDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
reemplazarNegativosDojo([4,-7,-3]);