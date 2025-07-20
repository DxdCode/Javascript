
//💪 10 EJERCICIOS


// 1. Declara dos variables `x` y `y`. Si ambas son números, calcula suma, resta, multiplicación, división y potencia. Si no, muestra error.

const x = 10
const y = 20

if (typeof x === 'number' && typeof y === 'number') {
    console.log('Suma' + (x + y))
    console.log('Resta' + (x - y))
    console.log('Multiplicacion' + (x * y))
    console.log('Division' + (x / y))
} else {
    console.log('Solo se aceptan numeros')
}

// 2. Crea una variable `edad` y clasifícala en: “Menor de edad”, “Adulto joven” (18-29), “Adulto” (30-59), “Adulto mayor” (60+).

let edad = 61
if (edad < 18) {
    console.log('Es menor de edad')
} else if (edad >= 18 && edad <= 29) {
    console.log('Eres un adulto joven')
} else if (edad >= 30 && edad <= 59) {
    console.log('Eres un adulto')
} else {
    console.log('Eres un adulto mayor')
}

// 3. Crea un objeto `persona` con nombre y edad. Verifica que sea objeto y que su edad sea mayor a 18 para permitir acceso.
const objectoPersona = { nombre: 'David', edad: 18 }

if (typeof objectoPersona === 'object' && objectoPersona instanceof Object) {
    if (objectoPersona.edad >= 18) {
        console.log('Mayor de edad acceso permitido')
    } else {
        console.log('Menor de edad acceso denegado')

    }
} else {
    console.log('Acceso denegado')
}
// 4. Crea un array de números y suma 5 a cada elemento usando un bucle.
const arrayNumeros = [1, 6, 8, 5]
for (let i = 0; i < arrayNumeros.length; i++) {
    arrayNumeros[i] += 5
}
console.log(arrayNumeros)
console.log(arrayNumeros.length)

// 5. Simula un carrito con un objeto `producto` (nombre, precio) y una variable `cantidad`. Calcula total y aplica descuento si es mayor a 100.

const producto = { nombre: 'Impresora', precio: '60' }
let cantidad = 6

if (typeof producto === 'object') {
    let totalPagar = producto.precio * cantidad
    if (totalPagar > 100) {
        console.log('Se aplica descuento')
        const descuento = totalPagar - (totalPagar / 100)
        console.log('Total a pagar es de: ' + descuento)
    } else {
        console.log('No se aplica descuento')
        console.log('Total a pagar es de:' + totalPagar)

    }
} else {
    console.log('No es un objecto')
}
// 6. Declara una variable `valor` undefined, luego asígnale un valor y verifica su tipo antes y después.
let valor
console.log(typeof valor)
valor = 10
console.log(typeof valor)

// 7. Usa operadores lógicos para validar si un número está entre 10 y 20 inclusive.

const numero = 64
const mensaje = (numero >= 10 && numero <= 20) ? 'Esta dentro [10 - 20]' : 'Esta afuera del [10 - 20]'
console.log(mensaje)

// 8. Crea una función que reciba dos números, valide que sean números, y retorne la multiplicación o un mensaje de error.

function validarNumero(x, y) {

    if (typeof x === 'number' && typeof y === 'number') {
        console.log('Multiplicacion es: ' + (x * y))
    } else {
        console.log('Solo se aceptan numeros')
    }
}
validarNumero(10,12)

// 9. Declara una variable `simbolo` con un Symbol y compara si dos símbolos con la misma descripción son iguales.

const simbolo1 = Symbol('test')
const simbolo2 = Symbol('test')

if (simbolo1 === simbolo2) {
    console.log("Son iguales")
} else {
    console.log("Son distintos") 
}

// 10. Crea un objeto con una propiedad que sea un array. Usa operadores para acceder a la propiedad y modificar un elemento del array.

const objecto = {arrayNumeross: [12,13,15]}
console.log(
objecto.arrayNumeross[0] = 6
)
console.log(objecto)