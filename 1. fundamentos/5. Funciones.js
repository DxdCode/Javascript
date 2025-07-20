// FUNCIONESS

// funciones declarativas 
function saludar(nombre) {
  console.log('Hola ' + nombre)
}
saludar('David')

// funciones expresadas 

const sumar = function(a, b) {
  return a + b
}
console.log(sumar(3, 4))

// funcion flechas 

const multiplicar = (a, b) => a * b
console.log(multiplicar(2, 5))
