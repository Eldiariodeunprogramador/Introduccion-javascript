let a = 10;             
let b = 5;              
let suma = a + b;    
let resta = a - b;   
let multiplicacion = a * b;
let division = a / b;

console.log(a + b);
console.log(a - b);
console.log(a % b); // Modulo. 
console.log(a ** b); //Exponencial

//OPERADORES DE COMPARACIÓN.

console.log(a == 10); //True (igualdad)
console.log(a === "10"); //False (igualdad estricta)
console.log(a > b); //True (mayor que)

//OPERADORES LÓGICOS...
let esMayor = a  > b;
let esPar = a % 2;
console.log(esMayor && esPar); // True (and)
console.log(!esMayor); //False Not

//OPERADORES DE ASIGNACIÓN 
let C = 20;
C +=10; 
console.log(C);

//Calcular el área de un triangulo 
let base = 10;
let altura = 5;
let area = base  * altura;
console.log(area);

//Comparar dos números
let num1 = 10;
let num2 = 20;
console.log(num1 < num2);

//COMBINAR DOS EXPRESIONES
let Mayor = true;
let Par = false;

console.log(Mayor && Par); //False
console.log(Mayor || Par); //True

//OPERADOR DE ASIGNACIÓN PARA INCREMENTAR EL VALOR DE UNA VARIABLE EN 5
let valor = 10;
valor += 5; 
console.log(valor);

//ESCRIBE UNA EXPRESIÓN QUE VERIFIQUE SI UN NÚMERO ES POSITIVO Y PAR
let numero = 8;
console.log(numero > 0 && numero % 2 === 0); //True