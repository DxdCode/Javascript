// FUNCIONESS
// Cuando necesitas una función reutilizable, definida en cualquier lugar, y quieres aprovecharla
// funciones declarativas 
function saludar(nombre) {
  console.log('Hola ' + nombre)
}
saludar('David')

// funciones expresadas 
// Cuando quieres guardar una función en una variable 
const sumar = function(a, b) {
  return a + b
}
console.log(sumar(3, 4))

// funcion flechas 
// Cuando necesitas una función corta 
const multiplicar = (a, b) => a * b
console.log(multiplicar(2, 5))

