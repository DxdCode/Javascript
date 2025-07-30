// ✅ ¿Qué es un objeto?
// Es una colección ordenada de pares clave: valor

const objeto = {
  clave: 1,
  nombre: "David",
  edad: 30,
  activo: true,
  saludo: function () {
    console.log("Hola");
  }
};

objeto.saludo(); // Hola

// ✅ Crear objetos

// 1. Literal
const objetoUno = { a: 1, b: 2 };
console.log(objetoUno); // { a: 1, b: 2 }

// 2. Constructor
const obj = new Object();
obj.a = 1;
obj.b = 2;
obj.c = 3;
console.log(obj); // { a: 1, b: 2, c: 3 }

// 3. Con prototipo
const prototipo = {
  saludar() {
    console.log("hola desde el prototipo");
  }
};

const objetoDos = Object.create(prototipo);
objetoDos.saludar(); // hola desde el prototipo

// ✅ Modificar y eliminar propiedades

obj.b = 33;           // Modificar propiedad
delete obj.a;         // Eliminar propiedad

console.log("b" in obj);                // true
console.log(obj.hasOwnProperty("b"));  // true

// ✅ Acceder a propiedades

console.log(objeto.nombre);       // David
console.log(objeto["nombre"]);    // David

const key = "edad";
console.log(objeto[key]);         // 30

// ✅ Copiar objetos

const copia1 = { ...objeto };                  // Spread
const copia2 = Object.assign({}, objeto);      // assign

// ✅ Convertir a JSON y volver a objeto

const objJson = { nombre: "David", edad: 30 };

const json = JSON.stringify(objJson); // '{"nombre":"David","edad":30}'
const nuevo = JSON.parse(json);       // { nombre: "David", edad: 30 }

console.log(json);
console.log(nuevo);

// ✅ Métodos útiles de Object

const persona = {
  nombre: "David",
  edad: 30
};

console.log("Object.keys(persona):", Object.keys(persona));       
// ['nombre', 'edad']

console.log("Object.values(persona):", Object.values(persona));    
// ['David', 30]

console.log("Object.entries(persona):", Object.entries(persona));  
// [['nombre', 'David'], ['edad', 30]]

const copia = Object.assign({}, persona);
console.log("Object.assign({}, persona):", copia);                 
// { nombre: 'David', edad: 30 }

Object.freeze(persona); // Inmutable
persona.edad = 40;       // No se cambia
console.log("Después de freeze:", persona.edad); // 30

Object.seal(persona); // No agrega ni elimina, pero puede modificar (ya estaba congelado)

console.log("Object.hasOwn(persona, 'edad'):", Object.hasOwn(persona, "edad")); 
// true

console.log("Object.getOwnPropertyNames(persona):", Object.getOwnPropertyNames(persona)); 
// ['nombre', 'edad']

console.log("Object.getOwnPropertyDescriptor(persona, 'edad'):", Object.getOwnPropertyDescriptor(persona, "edad"));
/*
{
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false
}
*/

