//Encuentra el mayor (max): Dado un array con múltiples valores, 
//escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

var arreglo = [9 , 7, 2, 15, 84, 5, 5, 14];
var mayor = 84;
 
for(i = 0; i < arreglo.lenght; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    };
}
 
console.log(mayor);