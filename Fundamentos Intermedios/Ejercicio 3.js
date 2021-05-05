//Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, 
//cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. 
//Tu función debería aceptar un argumento, un índice en la secuencia 
//(donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
//Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), 
//fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
//fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).

function fibonacci(n){
    var a=0;
    var b=1;
     
    for(i=0; i<n;i++){
    var numeroTemporal=a;
    a=b;
    b=numeroTemporal+b;
     
    document.writeln(a+"");
    }
     
    }