//  ES6: Map, Set, WeakMap y WeakSet

// Map

//  Un Map es una colección de pares clave-valor.
//   - Métodos principales:
//       * set(clave, valor): agrega o actualiza un par.
//       * get(clave): obtiene el valor asociado a la clave.
//       * has(clave): verifica si existe la clave.
//       * delete(clave): elimina la clave y su valor.
//       * size: propiedad que indica la cantidad de pares en el Map.
//   
const mapa = new Map();
mapa.set('nombre', 'David');
mapa.set(1, 'uno');
console.log(mapa.get('nombre'));
console.log(mapa.has(1));
console.log(mapa.size);
console.log(mapa)

// SET
// Un Set es una colección de valores únicos, sin claves.
//   - No permite elementos duplicados.
//   - Métodos principales:
//       * add(valor): agrega un valor al Set.
//       * has(valor): verifica si un valor está en el Set.
//       * delete(valor): elimina un valor.
//       * size: cantidad de elementos únicos.

const conjunto = new Set();
conjunto.add(5);
conjunto.add(5);
console.log(conjunto.size);


// WeakMap

//  - Similar a Map, pero las claves solo pueden ser objetos.
//   - Las referencias a claves son “débiles”, permitiendo que el recolector de basura elimine claves que no tengan otras referencias.
//   - No se puede iterar sobre un WeakMap ni obtener su tamaño.
//   - Útil para asociar datos privados a objetos sin riesgo de fuga de memoria.

const wm = new WeakMap();
let obj = {};
wm.set(obj, 'dato privado');
console.log(wm.get(obj)); // 'dato privado'
obj = null; // objeto puede ser recolectado

// WeakSet

// Similar a Set, pero solo puede contener objetos y las referencias son “débiles”.
// No iterable ni tiene tamaño.
// Útil para manejar listas de objetos con vida corta.

const ws = new WeakSet();
let objecto = {};
ws.add(objecto);
console.log(ws.has(objecto)); // true
obj = null; // objeto puede ser recolectado

//   - Usa Map cuando necesites pares clave - valor con claves no strings.
//   - Usa Set para colecciones únicas de valores simples o referencias.
//   - Usa WeakMap para asociar datos privados a objetos y evitar fugas de memoria.
//   - Usa WeakSet para listas de objetos con referencias débiles.

//   - Map y Set permiten mejor manejo de datos que objetos y arrays simples.
//   - WeakMap y WeakSet ayudan a mejorar la gestión de memoria.
//   - WeakMap y WeakSet no son iterables, lo que limita algunas operaciones.