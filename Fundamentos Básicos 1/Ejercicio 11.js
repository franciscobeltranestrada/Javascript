//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva 
//un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
//(ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(maxMinAvg([1,9,-5,6]));