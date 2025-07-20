
// OPERADORES Aritméticos
const suma = 4 + 3 //Operador de suma
const resta = 4 - 3 //Operador resta
const multiplicacion = 4 * 3 //Operador de multiplicacion
const division = 4 / 3 //Operador de division
const modulo = 4 % 3 //Operador de modulo
const potencia = 4 ** 3 //Operador de potencia 

console.log('La suma es:' + suma)
console.log('La resta es:' + resta)
console.log('La multiplicacion es:' + multiplicacion)
console.log('La division es:' + division)
console.log('El modulo es:' + modulo)
console.log('La potencia es:' + potencia)

// Operadores Asignación
let numero = 10 // Valor inicial

numero += 5 // Operador de asignación suma
console.log('Después de += 5 el valor es: ' + numero)
numero -= 3 // Operador de asignación resta
console.log('Después de -= 3 el valor es: ' + numero)
numero *= 2 // Operador de asignación multiplicación
console.log('Después de *= 2 el valor es: ' + numero)
numero /= 4 // Operador de asignación división
console.log('Después de /= 4 el valor es: ' + numero)
numero %= 3 // Operador de asignación módulo
console.log('Después de %= 3 el valor es: ' + numero)
numero **= 3 // Operador de asignación potencia
console.log('Después de **= 3 el valor es: ' + numero)

// Operador ternario 
const edad = 18
const mensaje = (edad >= 18) 
? 'Eres mayor de edad' 
: 'Eres menor de edad'

console.log('Resultado con operador ternario: ' + mensaje)

// TYPEOF para saber el tipo de datos
const texto = "Hola mundo"
const booleano = true
const arreglo = [1, 2, 3]
const objeto = { nombre: "David" }
const funcion = function() {}

console.log('typeof texto: ' + typeof texto)       // string
console.log('typeof booleano: ' + typeof booleano) // boolean
console.log('typeof arreglo: ' + typeof arreglo)   // object (ojo: los arrays son objeto)
console.log('typeof objeto: ' + typeof objeto)     // object
console.log('typeof funcion: ' + typeof funcion)   // function


// instance OF
const miArray = [1, 2, 3]
const miFecha = new Date()
const miMapa = new Map()

console.log('miArray instanceof Array: ' + (miArray instanceof Array)) // true
console.log('miArray instanceof Object: ' + (miArray instanceof Object)) // true
console.log('miFecha instanceof Date: ' + (miFecha instanceof Date))     // true
console.log('miMapa instanceof Map: ' + (miMapa instanceof Map))         // true



