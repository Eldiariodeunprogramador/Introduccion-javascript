/* CONCATENACIÓN CON TEMPLATE LITERALS $ {} */
                                              
                                              
let nombre = "Laura";                         
let edad = 20;                                
                                              
                                              
console.log("Hola, me llamo " + nombre + " y tengo " + edad);

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
console.log("=================================================================================");
                                                                                                                                                                                                
console.log("=================================================================================");/* EJERCICIO  */
                                                                                                 
                                                                                                 /* Cuando el operador + encuentra un texto, une en lugar de sumar. Con ${ } la operación se resuelve primero */

let a = 5;
let b = 3;
console.log("Resultado: " + a + b); // Resultado: 53 (unió los números como texto)
console.log("Resultado: " + (a + b)); // Resultado: 8
console.log(`Resultado: ${a + b}`); // Resultado: 8
console.log("=================================================================================");
console.log("=================================================================================");
                                                                                                 
                                                                                                 let producto = "Mouse";
let cantidad = 2;
let precio = 15000;
console.log(`Producto: ${producto} 
Cantidad: ${cantidad}
Precio unitario: $${precio}
Total a pagar: $${cantidad * precio}`);
console.log("=================================================================================");
console.log("=================================================================================");

// Producto: Mouse
// Cantidad: 2
// Precio unitario: $15000
// Total a pagar: $30000

/* RESOLVER LOS SIGUIENTES EJERCICIOS
Ejercicio 6. Reescribe el Ejercicio 2 (animal, raza y edad) usando template literals en lugar del operador +.
Ejercicio 7. Declara variables con tu nombre, programa de formación, número de ficha y ciudad. Muestra una ficha de presentación de varias líneas usando un solo console.logcon template literals.
Ejercicio 8. Declara el nombre de un producto, la cantidad y el precio unitario. Muestra el total a pagar calculado dentro de ${ } y con el signo de pesos, por ejemplo: Total a pagar: $45000.
*/

// Ejercicio 6, solución...

let animal = "Perro"; 
let raza = "Labrador";
let edadAnimal = 5;   
console.log(`
    Mi animal es ${animal} es de raza ${raza} y tiene ${edadAnimal} años   
    
    `);