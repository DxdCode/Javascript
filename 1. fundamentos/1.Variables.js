
// Datos Primitivos

let nombre = 'David Muela'
let edad = 25
let isActive = true
let grande = 9007199254740993n;  // bigint
let sinValor;                    // undefined
let vacio = null;                // null
let id = Symbol("id");           // symbol
// Tipos de referencia
let persona = { nombre: "David", edad: 21 }; // object
let numeros = [1, 2, 3, 4];                  // array
function saludar() { console.log("Hola!"); } // function
let ahora = new Date();                       // date


// Ejercicios

// 1. Declara una variable llamada `nombre` y asigna tu nombre como texto.
let name = 'David Muela'
// 2. Crea una variable `edad` y asigna tu edad (número entero).
let age = 21

// 3. Declara una variable `esEstudiante` y asigna un valor booleano (`true` o `false`).
const esEstudiantes = true
// 4. Crea una variable `precio` con un número decimal (por ejemplo, 19.99).
const precio = 10.01
// 5. Declara una variable sin valor y luego asígnale el número 100.
let valore = null
valore = 10
// 6. Crea dos variables `a` y `b`, asigna 5 y 10 respectivamente, luego crea una variable `suma` con su suma.
a = 10
b = 14
const suma = a + b
// 7. Declara una variable `mensaje` que concatene "Hola, mi nombre es " con la variable `nombre`.
const mensaje = `Mi nombre es ${nombre}`
// 8. Declara una variable `nulo` y asígnale el valor `null`.
const nulo = null
// 9. Declara una variable `noDefinida` sin asignarle ningún valor.
let noDefinida
// 10. Declara una constante `PI` con valor 3.1416, luego intenta cambiar su valor.
const PI = 3.1416
PI = 31121