//Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
//pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function convertirNegativo(arr){
    var nuevoArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i]*-1;
        }
        nuevoArr.push(arr[i]);
    }
    return nuevoArr;
}

console.log(convertirNegativo([3,8,2]));

