//  Spread (...)

//Copiar arrays
const arr = [1, 2, 3];
const copia = [...arr]; 

//Combinar arrays
const a = [1, 2];
const b = [3, 4];
const combinadoA = [...a, ...b];

// Copiar objetos
const obj = { a: 1, b: 2 };
const copiaObj = { ...obj }; 

//Combinar objetos
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinadoB = { ...obj1, ...obj2 }; 

// Enviar elementos como argumentos
const numeros = [1, 2, 3];
Math.max(...numeros); 

// Rest (...)

//Parámetros de funciones
function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
sumar(1, 2, 3); // 6

// Destructuring con objeto

const { aA, ...resto } = { aA: 1, b: 2, c: 3 };

//Destructuring con arrays
const [primero, ...restoNumeros] = [1, 2, 3, 4];





// 5 Promises (introducción a async)
// Mecanismo para manejo asíncrono (aunque más profundo en ES7+ con async/await).

// 6 Classes
// Sintaxis azucarada para crear clases y herencia (reemplazo más claro de prototypes).

// 7 Modules (import/export)
// Sintaxis para dividir código en archivos reutilizables.