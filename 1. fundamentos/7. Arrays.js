// ARRAYS
// Es una estructura de datos que almacena una lista ordenada de valores
// Los valores pueden ser de cualquier tipo: números, strings, objetos, funciones, otros arrays, etc.

// Crear arrays:
const numeros = [10, 20, 30];
const arr = new Array(1, 2, 3); // menos común pero válido

// Acceder a elementos:
const frutas = ["manzana", "banana", "cereza"];
console.log(frutas[0]); // "manzana"
console.log(frutas[2]); // "cereza"

// Modificar un elemento:
frutas[1] = "pera"; // cambia "banana" por "pera"
console.log(frutas); // ["manzana", "pera", "cereza"]

// Propiedad length (cantidad de elementos):
console.log(frutas.length); // 3

// MÉTODOS PARA MODIFICAR EL ARRAY:

// push() - añade uno o más elementos al final del array
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop() - elimina el último elemento y lo devuelve
const ultimo = arr.pop();
console.log(ultimo); // 4
console.log(arr);    // [1, 2, 3]

// shift() - elimina el primer elemento y lo devuelve
const primero = arr.shift();
console.log(primero); // 1
console.log(arr);     // [2, 3]

// unshift() - añade uno o más elementos al inicio
arr.unshift(0);
console.log(arr); // [0, 2, 3]

// reverse() - invierte el orden de los elementos *en el mismo array*
arr.reverse();
console.log(arr); // [3, 2, 0]

// sort() - ordena el array *en el mismo array*
// Por defecto ordena como strings (alfabéticamente)
const letras = ["b", "a", "c"];
letras.sort();
console.log(letras); // ["a", "b", "c"]

// Para ordenar números correctamente, se pasa una función comparadora:
const nums = [10, 2, 30, 25];
nums.sort((a, b) => a - b); // orden ascendente
console.log(nums); // [2, 10, 25, 30]

// splice() - cambia el contenido del array eliminando, reemplazando o añadiendo elementos
// Sintaxis: splice(indiceInicio, cantidadEliminar, elemento1, elemento2, ...)
const splicearr = [1, 2, 3, 4, 5];
splicearr.splice(2, 2, 8, 9); // elimina 2 elementos desde índice 2, agrega 8 y 9 ahí
console.log(splicearr); // [1, 2, 8, 9, 5]

// slice() - devuelve una copia de una parte del array (sin modificar el original)
// slice(inicio, fin) - fin no incluido
const arrayOriginal = [10, 20, 30, 40, 50];
const copiaPorcion = arrayOriginal.slice(1, 4);
console.log(copiaPorcion); // [20, 30, 40]
console.log(arrayOriginal); // [10, 20, 30, 40, 50] (sin cambios)

// concat() - une dos o más arrays y devuelve uno nuevo
const a1 = [1, 2];
const a2 = [3, 4];
const unido = a1.concat(a2);
console.log(unido); // [1, 2, 3, 4]

// join() - une todos los elementos en un string separado por un separador
const palabras = ["Hola", "mundo"];
const frase = palabras.join(" ");
console.log(frase); // "Hola mundo"

// indexOf() - devuelve el índice del primer elemento encontrado, o -1 si no existe
console.log(frutas.indexOf("pera")); // 1
console.log(frutas.indexOf("banana")); // -1 (ya no está)

// lastIndexOf() - devuelve el índice de la última aparición de un elemento
const arrRepeat = [1, 2, 3, 2, 1];
console.log(arrRepeat.lastIndexOf(2)); // 3

// includes() - devuelve true si el elemento está en el array, false si no
console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("banana")); // false

// MÉTODOS DE ITERACIÓN Y TRANSFORMACIÓN:

// forEach() - ejecuta una función para cada elemento (no devuelve nada)
arr.forEach((el, i) => {
  console.log(`Elemento en índice ${i}: ${el}`);
});

// map() - crea un nuevo array transformando cada elemento según la función
const dobles = arr.map(x => x * 2);
console.log(dobles);

// filter() - crea un nuevo array con elementos que pasan el test (condición)
const mayoresQueUno = arr.filter(x => x > 1);
console.log(mayoresQueUno);

// reduce() - reduce el array a un solo valor acumulando
const suma = arr.reduce((acc, x) => acc + x, 0);
console.log(suma);

// some() - devuelve true si al menos un elemento cumple la condición
const hayCero = arr.some(x => x === 0);
console.log(hayCero); // true

// every() - devuelve true solo si todos cumplen la condición
const todosPositivos = arr.every(x => x > 0);
console.log(todosPositivos); // false (porque hay 0)

// find() - devuelve el primer elemento que cumple la condición o undefined
const primeroMayorQueDos = arr.find(x => x > 2);
console.log(primeroMayorQueDos);

// findIndex() - devuelve el índice del primer elemento que cumple la condición o -1
const indiceMayorQueDos = arr.findIndex(x => x > 2);
console.log(indiceMayorQueDos);

// MÉTODOS DE CONVERSIÓN:

// Array.from() - crea un array desde un objeto iterable o similar a array
const str = "hola";
const arrDesdeStr = Array.from(str);
console.log(arrDesdeStr); // ['h','o','l','a']

// toString() - convierte array a string separado por comas
console.log(arr.toString());

// flat() - aplana un array anidado hasta una profundidad dada (por defecto 1)
const arrAnidado = [1, [2, [3, 4]], 5];
console.log(arrAnidado.flat());      // [1, 2, [3, 4], 5]
console.log(arrAnidado.flat(2));     // [1, 2, 3, 4, 5]

// flatMap() - combina map + flat (de profundidad 1)
const palabrasConEspacios = ["Hola Mundo", "Adiós Mundo"];
const palabrasSeparadas = palabrasConEspacios.flatMap(s => s.split(" "));
console.log(palabrasSeparadas); // ['Hola','Mundo','Adiós','Mundo']

// MÉTODOS DE ORDENAMIENTO Y BÚSQUEDA AVANZADOS:

// sort() con función para ordenar objetos por propiedad
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Juan", edad: 30 },
];
personas.sort((a, b) => a.edad - b.edad);
console.log(personas); // ordenado por edad ascendente

// find() con objetos
const personaMayorDe25 = personas.find(p => p.edad > 25);
console.log(personaMayorDe25);

// MÉTODOS PARA MODIFICAR EL ARRAY SIN CAMBIAR EL ORIGINAL:

// spread operator para clonar arrays
const copiaArr = [...arr];
copiaArr.push(99);
console.log(arr);      // original no cambia
console.log(copiaArr); // copia con 99 añadido

// Destructuración para extraer elementos
const [primeroElem, segundoElem, ...resto] = arr;
console.log(primeroElem, segundoElem, resto);

// MÉTODOS DE BÚSQUEDA BINARIA (no nativos, pero importantes)
// Requieren arrays ordenados y algoritmos personalizados

// MÉTODOS CON PROTOTIPOS PERSONALIZADOS (avanzado)
// Puedes extender Array.prototype para agregar métodos personalizados, pero no recomendado en producción

// MATRICES (arrays multidimensionales)
const matriz = [
  [1, 2],
  [3, 4],
];
console.log(matriz[0][1]); // 2

// Recorrer matriz con bucles anidados
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
  }
}

// MÉTODOS UTILIZANDO FUNCIONES FLECHA Y MÉTODOS FUNCIONALES
const nums = [1, 2, 3, 4, 5];

// Usar map + filter + reduce encadenados
const resultado = nums
  .map(x => x * 2)
  .filter(x => x > 5)
  .reduce((acc, x) => acc + x, 0);
console.log(resultado);

// CONVERSIONES ENTRE ARRAY Y OBJETO

// Object.entries() convierte objeto a array de pares [clave, valor]
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log(entries); // [['a',1], ['b',2]]

// Object.fromEntries() convierte array de pares a objeto
const nuevoObj = Object.fromEntries(entries);
console.log(nuevoObj); // {a:1, b:2}

// OTRAS UTILIDADES:

// isArray() verifica si es un array
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({}));  // false

// fill() rellena un array con un valor
const relleno = new Array(5).fill(0);
console.log(relleno); // [0,0,0,0,0]

// copyWithin() copia parte del array dentro del mismo array (in-place)
const copiaDentro = [1, 2, 3, 4, 5];
copiaDentro.copyWithin(0, 3, 5);
console.log(copiaDentro); // [4, 5, 3, 4, 5]

// toLocaleString() convierte a string con formato local
console.log(arr.toLocaleString());

// entries() devuelve un iterador con pares [indice, valor]
const iterador = arr.entries();
for (const [index, value] of iterador) {
  console.log(index, value);
}

// keys() devuelve iterador con índices
const keysIter = arr.keys();
for (const key of keysIter) {
  console.log(key);
}

// values() devuelve iterador con valores
const valuesIter = arr.values();
for (const value of valuesIter) {
  console.log(value);
}
