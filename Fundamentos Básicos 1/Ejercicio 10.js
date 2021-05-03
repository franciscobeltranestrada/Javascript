//Negativos: Dado un array con múltiples valores, 
//escribe una función que reemplace cualquier número negativo dentro del array por 0. 
//Cuando el programa esté listo, el array no debiera contener números negativos 
//(ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function noNegativos(arr){
    for (var idx = 0; idx < arr.length; idx++){
         if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
noNegativos([-4,5,19,-7]);