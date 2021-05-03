//Encuentra el promedio (avg): Dado un array con múltiples valores, 
//escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function encontrarAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
console.log(encontrarAvg([2,5,7,9,15]));