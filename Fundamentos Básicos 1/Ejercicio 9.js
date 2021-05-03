//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor 
//por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadrados(arr){
    for (var idx = 0; idx < arr.length; idx++){
         arr[idx] = arr[idx]*arr[idx];
    }
}
cuadrados([9, 7, 23, 14]);

