//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
//(ej: 1+3+5+...+4997+4999).

function sumaImpares0Al(){
    var suma = 0;
    for (var i=1; i<=5000; i+=2){
      if (i % 2 == 1) {
        suma += i
      }
    }
    return suma
  }
  
  console.log(sumaImpares0Al(5000));
