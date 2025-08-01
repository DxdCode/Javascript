// 1️⃣ Crea una función `procesarNumeros` que reciba un array de números mixtos (positivos, negativos y ceros).
// Usa un bucle y operadores lógicos para:
// - Separar en dos nuevos arrays: pares e impares.
// - Ignorar los ceros usando `continue`.
// Devuelve un objeto con { pares: [...], impares: [...] }.
function procesarNumeros(numeros) {
  const pares = [];
  const impares = [];
  for (let num of numeros) {
    if (num === 0) continue;
    num % 2 === 0 ? pares.push(num) : impares.push(num);
  }
  return { pares, impares };
}

// 2️⃣ Crea un objeto `usuario` con propiedades nombre, edad y un array de compras.
// Usa un `if` y un operador ternario para determinar:
// - Si edad < 18: "Usuario menor sin acceso a compras"
// - Si edad >= 18: muestra el número de compras que tiene y la primera compra.
// Usa `typeof` para verificar tipos antes de procesar.

const usuario = {
  nombre: "David",
  edad: 19,
  compras: ["Laptop", "Celular"]
};

if (typeof usuario.edad === 'number' && Array.isArray(usuario.compras)) {
  usuario.edad < 18
    ? console.log("Usuario menor sin acceso a compras")
    : console.log(`Compras: ${usuario.compras.length}, Primera: ${usuario.compras[0]}`);
} else {
  console.log("Datos inválidos");
}

// 3️⃣ Declara dos variables `a` y `b` que pueden ser número o string.
// Si ambos son números, haz todas las operaciones aritméticas y muestra los resultados.
// Si ambos son strings, concaténalos en mayúsculas.
// Si son de tipos distintos, muestra un error usando `throw` y `try...catch` para capturarlo.
let a = 10;
let b = "20";

try {
  if (typeof a === 'number' && typeof b === 'number') {
    console.log("Suma:", a + b);
    console.log("Resta:", a - b);
    console.log("Multiplicación:", a * b);
    console.log("División:", a / b);
  } else if (typeof a === 'string' && typeof b === 'string') {
    console.log((a + b).toUpperCase());
  } else {
    throw new Error("Tipos incompatibles");
  }
} catch (e) {
  console.error("Error:", e.message);
}
// 4️⃣ Crea un array de objetos `productos` con {nombre, precio}.
// Usa un bucle `for` para calcular el total, pero si algún producto tiene precio no numérico, usa `try...catch` para capturar el error y sigue con el siguiente usando `continue`.
// Al final, muestra el total.

const productos = [
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: "caro" },
  { nombre: "Pantalla", precio: 200 }
];

let total = 0;
for (let prod of productos) {
  try {
    if (typeof prod.precio !== 'number') throw new Error("Precio inválido");
    total += prod.precio;
  } catch (e) {
    console.warn(`Producto ignorado: ${prod.nombre} (${e.message})`);
    continue;
  }
}
console.log("Total productos:", total);

// 5️⃣ Crea una función `analizarTexto` que reciba un string. 
// Si no es string, lanza un error.
// Si es string, recorre cada letra y cuenta cuántas son vocales y cuántas consonantes.
// Devuelve un objeto {vocales: X, consonantes: Y}.
function analizarTexto(texto) {
  if (typeof texto !== 'string') throw new Error("Dato no es string");

  let vocales = 0;
  let consonantes = 0;
  for (let letra of texto.toLowerCase()) {
    if (/[aeiou]/.test(letra)) vocales++;
    else if (/[a-z]/.test(letra)) consonantes++;
  }
  return { vocales, consonantes };
}

console.log(analizarTexto("Hola Mundo"));


// 6️⃣ Simula un carrito: un array de objetos con {nombre, precio, cantidad}.
// Recorre el array con un `for`, multiplica precio*cantidad y suma al total.
// Si algún producto tiene cantidad 0 o negativa, usa `continue` para saltarlo.
// Si el total supera 500, aplica un descuento del 10% usando un operador ternario.
const carrito = [
  { nombre: "Libro", precio: 100, cantidad: 2 },
  { nombre: "Lámpara", precio: 80, cantidad: 0 },
  { nombre: "Mesa", precio: 200, cantidad: 1 }
];

let totalCarrito = 0;
for (let item of carrito) {
  if (item.cantidad <= 0) continue;
  totalCarrito += item.precio * item.cantidad;
}
totalCarrito = totalCarrito > 500 ? totalCarrito * 0.9 : totalCarrito;
console.log("Total a pagar:", totalCarrito);

// 7️⃣ Crea una función `clasificarEdades` que reciba un array de edades.
// Con un bucle, usa `if/else` para clasificarlas en 4 arrays: menores, adultos jóvenes, adultos, adultos mayores.
// Devuelve un objeto con esos 4 arrays.
// Usa `instanceof` para asegurarte de que el parámetro recibido es un array antes de procesar.
function clasificarEdades(edades) {
  if (!(edades instanceof Array)) throw new Error("Debe ser un array");
  const menores = [], jovenes = [], adultos = [], mayores = [];
  for (let edad of edades) {
    if (edad < 18) menores.push(edad);
    else if (edad < 30) jovenes.push(edad);
    else if (edad < 60) adultos.push(edad);
    else mayores.push(edad);
  }
  return { menores, jovenes, adultos, mayores };
}

console.log(clasificarEdades([12, 25, 35, 65, 17, 40]));
// 8️⃣ Crea un array de números y usa un bucle `for` para modificarlos:
// - Si es par, multiplícalo por 2.
// - Si es impar, súmale 5.
// - Si el número es mayor a 50 después del cálculo, sácalo del array (usa `splice` con cuidado dentro del bucle).
let numeros = [12, 7, 28, 33, 10, 45];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numeros[i] *= 2;
  } else {
    numeros[i] += 5;
  }
  if (numeros[i] > 50) {
    numeros.splice(i, 1);
    i--; // Ajustar índice después del splice
  }
}
console.log("Modificados:", numeros);
// 9️⃣ Declara dos Symbols con la misma descripción y comprueba si son estrictamente iguales.
// Además, guarda ambos en un objeto como claves de propiedades y muestra cómo se comporta ese objeto al imprimirlo.
const sym1 = Symbol("clave");
const sym2 = Symbol("clave");
console.log("¿Iguales?", sym1 === sym2);

const objeto = {
  [sym1]: "valor1",
  [sym2]: "valor2"
};
console.log("Objeto con símbolos:", objeto);
console.log("Propiedades con símbolo:", objeto[sym1], objeto[sym2]);
// 🔟 Crea una función `procesarDatosMixtos` que reciba un array con datos de distintos tipos.
// Recorre el array con un bucle y:
// - Si es number y > 0, súmalo a un total.
// - Si es string, guárdalo en un array de strings.
// - Si es booleano y true, cuenta cuántos hay.
// - Si es objeto o array, ignóralo.
// Devuelve un objeto { totalNumeros: X, listaStrings: [...], cantidadTrue: Y }.
function procesarDatosMixtos(arr) {
  let totalNumeros = 0;
  const listaStrings = [];
  let cantidadTrue = 0;

  for (let item of arr) {
    if (typeof item === 'number' && item > 0) totalNumeros += item;
    else if (typeof item === 'string') listaStrings.push(item);
    else if (typeof item === 'boolean' && item === true) cantidadTrue++;
  }

  return { totalNumeros, listaStrings, cantidadTrue };
}

console.log(procesarDatosMixtos([10, "hola", true, false, {}, [], -1, "JS", 20]));
