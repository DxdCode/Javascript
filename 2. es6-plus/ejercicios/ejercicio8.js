// 1️⃣ Crea un Map que almacene el nombre y edad de varias personas. Luego, devuelve la edad de un nombre dado.
const mapNombre = new Map()
mapNombre.set("David", 13)
mapNombre.set("Pedro", 21)
mapNombre.set("Carol", 53)
mapNombre.set("Juan", 19)
mapNombre.set("Valeria", 25)
console.log(mapNombre.get("Valeria"))

// 2️⃣ Dado un array con valores repetidos, usa Set para eliminar duplicados y devuelve un array sin repetidos.

const numeros = [1, 2, 3, 5, 5, 2, 5, 1, 3]
const numSinRepetir = new Set()
for (const numero of numeros) {
    numSinRepetir.add(numero)
    numSinRepetir.has(numero)
}
console.log(numSinRepetir)

// 3️⃣ Crea un WeakMap para asociar datos privados a objetos usuario. Crea 3 usuarios y asocia una clave secreta a cada uno. Luego, recupera la clave de uno.
const usuariosConClaves = new WeakMap();
const usuario1 = { nombre: "David" }
const usuario2 = { nombre: "Pedro" }
const usuario3 = { nombre: "Carrot" }

usuariosConClaves.set(usuario1, 1232)
usuariosConClaves.set(usuario2, 1232)
usuariosConClaves.set(usuario3, 1232)
const claveUsuario = usuariosConClaves.get(usuario2)
console.log(claveUsuario)

// 4️⃣ Implementa una función que reciba un array de números y devuelva otro array solo con los valores únicos usando Set.

function numeroSinRepetir(arr) {
    const numSinRepetir = new Set(arr)
    return Array.from(numSinRepetir);

}
console.log(numeroSinRepetir(numeros))

// 5️⃣ Usa Map para contar la frecuencia de palabras en un texto dado. Devuelve un Map con palabra → frecuencia.
const mapNumero = new Map()
let palab = "La vida es bella como la es la verenjena"
const palabras = palab.toLowerCase().split(/\s+/);
for (const palabra of palabras) {
    if (palabra) {
        mapNumero.set(palabra, (mapNumero.get(palabra) || 0) + 1);
    }
}
console.log(mapNumero)


// 6️⃣ Crea un WeakSet y añade varios objetos a él. Luego, verifica si un objeto dado está dentro del WeakSet.
const objectos = new WeakSet();
const objecto1 = { nombre: "pepe" }
const objecto2 = { nombre: "pepe" }

objectos.add(objecto1)
objectos.add(objecto2)
console.log(objectos.has(objecto2) ? "Objecto ya esta" : "Objecto agregado"
)
// 7️⃣ Dado un Map con pares clave-valor, crea una función que intercambie claves y valores (invierte el Map).
const mapa = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
function invertirMap(originalMap) {
  const invertido = new Map();
  for (const [clave, valor] of originalMap) {
    invertido.set(valor, clave);
  }
  return invertido;
}
console.log(invertirMap(mapa))
// 8️⃣ Usa Set para verificar si dos arrays tienen elementos en común. Devuelve true si hay intersección, false si no.
const array1 =[1,2,3]
const array2 =[2,5,3]
function tienenInterseccion(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.some(elemento => set1.has(elemento));
}
console.log(tienenInterseccion(array1, array2)); // true

// 9️⃣ Crea un contador de objetos usando WeakMap que registre cuántas veces se ha llamado una función con cada objeto.

const contadorWeak = new WeakMap();

function contar(objeto) {
    if (contadorWeak.has(objeto)) {
        contadorWeak.set(objeto, contadorWeak.get(objeto) + 1);
    } else {
        contadorWeak.set(objeto, 1);
    }

    console.log(`Llamadas con este objeto: ${contadorWeak.get(objeto)}`);
}

const obj1 = {};

contar(obj1);
contar(obj1);

// 🔟 Implementa una función que reciba un array de objetos y devuelva un array con los objetos únicos (por referencia) usando WeakSet.

// (elimina objetos duplicados por referencia)
const objA= { id: 1, nombre: "A" };
const objB = { id: 2, nombre: "B" };

const array = [objA, objB, objA]; // obj1 se repite por referencia

function objetosUnicosPorReferencia(arr) {
  const seen = new WeakSet();
  const resultado = [];

  for (const obj of arr) {
    if (!seen.has(obj)) {
      seen.add(obj);
      resultado.push(obj);
    }
  }

  return resultado;
}

console.log(objetosUnicosPorReferencia(array));

const arrayObjectos = [
  { id: 1, nombre: "A" },
  { id: 2, nombre: "B" },
  { id: 1, nombre: "A" },
  { id: 3, nombre: "C" },
];
// Elimina duplicados por valor (id y nombre)
function objetosUnicosPorValor(arr) {
  const seen = new Set();
  const resultado = [];

  for (const obj of arr) {
    if (!seen.has(obj)) {
      seen.add(obj);
      resultado.push(obj);
    }
  }

  return resultado;
}

console.log(objetosUnicosPorValor(arrayObjectos));
