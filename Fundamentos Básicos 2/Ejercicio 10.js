//Dado un array, escribe una función que invierte sus valores en el lugar. 
//Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, 
//es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. 
//(Pista: necesitarás intercambiar (swap) valores).

function arregloInverso(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(arregloInverso([7,4,1,9,3,8]));

