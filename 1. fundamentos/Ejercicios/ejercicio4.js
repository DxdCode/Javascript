
// // 1️⃣ Declara dos variables x y y de distintos tipos (pueden ser string, number, boolean).
// // Usa if/else y typeof para imprimir:
// // - Si ambos son números, muestra su suma, resta, multiplicación y división.
// // - Si ambos son strings, muestra su concatenación.
// // - Si son tipos diferentes, muestra un mensaje: "Tipos incompatibles".
// let x = '1'
// let y = 'hola'

// if (typeof x === 'number' && typeof y === 'number') {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
// } else if (typeof x === 'string' && typeof y === 'string') {
//     console.log(x + y)
// } else {
//     console.log('Tipos incompatibles')
// }

// // 2️⃣ Usa un bucle for para recorrer los números del 1 al 50.
// // Imprime solo los números divisibles por 3 y 5 al mismo tiempo usando operadores lógicos.
// // Usa continue para saltar los que no cumplan la condición.

// for (let i = 0; i < 50; i++) {
//     if (i % 5 === 0 && i % 3 == 0) {
//         console.log(i)
//     } else {
//         continue
//     }

// }
// // 3️⃣ Declara una variable edad y usa if/else if/else con operadores de comparación:
// // - Menor a 13: "Niño"
// // - Entre 13 y 17: "Adolescente"
// // - Entre 18 y 64: "Adulto"
// // - Mayor o igual a 65: "Adulto mayor"

// let edad = 90

// if (edad < 13) {
//     console.log('Nino')
// } else if (edad >= 13 && edad <= 17) {
//     console.log('Adolescente')
// } else if (edad > 18 && edad <= 64) {
//     console.log('Adulto')
// } else {
//     console.log('Adulto mayor')
// }

// // 4️⃣ Usa un bucle while que parta de un número n (decláralo tú).
// // Resta 7 en cada iteración y muestra el valor actualizado hasta que llegue a cero o negativo.
// // Usa break si el número se hace exactamente 14 en alguna iteración.
// let n = 49
// while (n > 0) {
//     if (n === 14) {
//         console.log('Tuviste suerte bro fue el 14')
//         break
//     } else {
//         n -= 7
//         console.log(n)
//     }
// }

// // 5️⃣ Declara un símbolo y compáralo con otro símbolo con la misma descripción usando ===.
// // Muestra un mensaje indicando si son iguales o diferentes.
// const simbolo1 = Symbol('h')
// const simbolo2 = Symbol('h')
// const res = simbolo1 === simbolo2 ? 'Son iguales' : 'Son diferentes'
// console.log(res)

// // 6️⃣ Usa un switch para evaluar una variable llamada dia con valores del 1 al 7.
// // Cada caso debe imprimir el nombre del día correspondiente.
// // Usa default para imprimir "Valor no válido" si no está entre 1 y 7.
// let dia = 2
// switch (dia) {
//     case 1:
//         console.log('Lunes')
//         break
//     case 2:
//         console.log('Martes')
//         break
//     case 3:
//         console.log('Miercoles')
//         break
//     case 4:
//         console.log('Jueves')
//         break
//     case 5:
//         console.log('Viernes')
//         break
//     case 6:
//         console.log('Sabado')
//         break
//     case 7:
//         console.log('Domingo')
//         break
//     default:
//         console.log('Valor no válido')
// }

// // 7️⃣ Declara una variable contador = 0. 
// // Usa un bucle do...while para sumar 3 en cada iteración y mostrar el valor,
// // Detente cuando el contador supere 30.

// let contador = 0
// do{
//     console.log(contador+=3)

// }while(contador < 30)

// // 8️⃣ Usa un bucle for para recorrer del 1 al 20.
// // Si el número es par, imprímelo multiplicado por 2 usando operador de asignación *=.
// // Si es impar, imprímelo sumado en 5 usando operador de asignación +=.
// console.log('OTROOOOOOOOOO')
// for (let i = 1; i <= 20; i++) {
//   let temp = i
//   if (temp % 2 === 0) {
//     temp *= 2
//     console.log(temp)
//   } else {
//     temp += 5
//     console.log(temp)
//   }
// }


// // 9️⃣ Declara dos variables num1 y num2.
// // Usa un operador ternario para determinar cuál es mayor y guarda el resultado en una variable mensaje.
// // Imprime el mensaje.

// let num1 = 2
// let num2 = 10

// const result = num1 > num2 ? `El numero ${num1} es mayor` : `El numero ${num2} es mayor`
// console.log(result)

// // 🔟 Crea una variable cualquiera y usa typeof e instanceof (cuando aplique) para mostrar por consola el tipo de dato y si es instancia de Object o no.

// let variable = 1
// if(variable instanceof Object === true){
// console.log('Tipo de dato' + typeof variable + ' es un objecto')

// }else{
// console.log('Tipo de dato es ' + typeof variable + ' y es un objecto')

// }

// // 12 Usa un bucle do...while para pedir un número inicial y seguir restando 1 hasta que sea menor que 0, mostrando cada valor.
let num = 10
do {
    res = num -= 1
    console.log(res)
} while (num > -1)
// 13 Usa un bucle for para imprimir solo los números pares del 1 al 20.
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
// // 14 Usa un bucle for que imprima los números del 1 al 10, pero si llega al 5 usa `continue` para saltarlo.
console.log('Otro ejercios')

for (let i = 1; i < 11; i++) {
    if (i === 5) continue

    console.log(i)

}
// // 15 Usa un bucle for que imprima los números del 1 al 10, pero si llega al 7 usa `break` para detener el bucle.
console.log('Otro ejercios 2')

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break
    } else {
        console.log(i)
    }
}
// // 16 Declara dos variables `a` y `b` y usa if/else para mostrar cuál es mayor o si son iguales.

let a = 2
let b = 1

if (a > b) {
    console.log('Es mayor' + a)
} else if (a < b) {
    console.log('Es mayor' + b)
} else if (a == b) {
    console.log("Son iguales")
} else {
    console.log("Ingrea bien")
}
