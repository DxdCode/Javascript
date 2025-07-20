// 1️⃣ Crea una función `procesarNumeros` que reciba un array de números mixtos (positivos, negativos y ceros).
// Usa un bucle y operadores lógicos para:
// - Separar en dos nuevos arrays: pares e impares.
// - Ignorar los ceros usando `continue`.
// Devuelve un objeto con { pares: [...], impares: [...] }.

// 2️⃣ Crea un objeto `usuario` con propiedades nombre, edad y un array de compras.
// Usa un `if` y un operador ternario para determinar:
// - Si edad < 18: "Usuario menor sin acceso a compras"
// - Si edad >= 18: muestra el número de compras que tiene y la primera compra.
// Usa `typeof` para verificar tipos antes de procesar.

// 3️⃣ Declara dos variables `a` y `b` que pueden ser número o string.
// Si ambos son números, haz todas las operaciones aritméticas y muestra los resultados.
// Si ambos son strings, concaténalos en mayúsculas.
// Si son de tipos distintos, muestra un error usando `throw` y `try...catch` para capturarlo.

// 4️⃣ Crea un array de objetos `productos` con {nombre, precio}.
// Usa un bucle `for` para calcular el total, pero si algún producto tiene precio no numérico, usa `try...catch` para capturar el error y sigue con el siguiente usando `continue`.
// Al final, muestra el total.

// 5️⃣ Crea una función `analizarTexto` que reciba un string. 
// Si no es string, lanza un error.
// Si es string, recorre cada letra y cuenta cuántas son vocales y cuántas consonantes.
// Devuelve un objeto {vocales: X, consonantes: Y}.

// 6️⃣ Simula un carrito: un array de objetos con {nombre, precio, cantidad}.
// Recorre el array con un `for`, multiplica precio*cantidad y suma al total.
// Si algún producto tiene cantidad 0 o negativa, usa `continue` para saltarlo.
// Si el total supera 500, aplica un descuento del 10% usando un operador ternario.

// 7️⃣ Crea una función `clasificarEdades` que reciba un array de edades.
// Con un bucle, usa `if/else` para clasificarlas en 4 arrays: menores, adultos jóvenes, adultos, adultos mayores.
// Devuelve un objeto con esos 4 arrays.
// Usa `instanceof` para asegurarte de que el parámetro recibido es un array antes de procesar.

// 8️⃣ Crea un array de números y usa un bucle `for` para modificarlos:
// - Si es par, multiplícalo por 2.
// - Si es impar, súmale 5.
// - Si el número es mayor a 50 después del cálculo, sácalo del array (usa `splice` con cuidado dentro del bucle).

// 9️⃣ Declara dos Symbols con la misma descripción y comprueba si son estrictamente iguales.
// Además, guarda ambos en un objeto como claves de propiedades y muestra cómo se comporta ese objeto al imprimirlo.

// 🔟 Crea una función `procesarDatosMixtos` que reciba un array con datos de distintos tipos.
// Recorre el array con un bucle y:
// - Si es number y > 0, súmalo a un total.
// - Si es string, guárdalo en un array de strings.
// - Si es booleano y true, cuenta cuántos hay.
// - Si es objeto o array, ignóralo.
// Devuelve un objeto { totalNumeros: X, listaStrings: [...], cantidadTrue: Y }.
