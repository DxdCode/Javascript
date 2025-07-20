// Controles de flujo

// 1. Condicionales  

// if / else if / else
let edad = 20

if (edad < 18) {
  console.log('Menor de edad')
} else if (edad < 30) {
  console.log('Adulto joven')
} else {
  console.log('Adulto')
}

// swith
let dia = 2
switch (dia) {
  case 1:
    console.log('Lunes')
    break
  case 2:
    console.log('Martes')
    break
  default:
    console.log('Otro día')
}

// 2. Bucles

// for
for (let i = 0; i < 5; i++) {
  console.log('Iteración número ' + i)
}
// while 
let i = 0
while (i < 5) {
  console.log('Iteración número ' + i)
  i++
}
// do while 
let j = 0
do {
  console.log('Iteración número ' + j)
  j++
} while (j < 5)

//  3. Control dentro de bucle

// break salir del bucle
for (let i = 0; i < 10; i++) {
  if (i === 5) break
  console.log(i)
}
//continue saltar una iteracion
for (let i = 0; i < 5; i++) {
  if (i === 2) continue
  console.log(i)
}
