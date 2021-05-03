//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function intercambiar(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [2,6,9,-5];
intercambiar(tester);
console.log(tester);
