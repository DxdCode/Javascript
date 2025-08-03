// 1. Propiedad abreviada (Shorthand property names)
// Si el nombre de la propiedad y la variable es el mismo, puedes escribirlo una sola vez.

const nombre = "Ana";
const edad = 30;

// Antes ES6
const persona1 = {
  nombre: nombre,
  edad: edad
};

// Con ES6 (más limpio)
const persona2 = {
  nombre,
  edad
};

// 2. Métodos abreviados (Shorthand method names)
const persona = {
  saludar() {
    console.log("Hola!");
  }
};
persona.saludar();


// 3. Propiedades computadas (Computed property names)

const clave = "correo";

const personas = {
  nombre: "Ana",
  [clave]: "ana@mail.com",
  ["edad" + "Actual"]: 25
};

console.log(personas);

// 4. Herencia de prototipos en objetos

const animal = {
  sonido: () => console.log("hace sonido")
};

const perro = {
  __proto__: animal,
  ladrar() {
    console.log("guau");
  }
};

perro.sonido(); // heredado
perro.ladrar(); // propio
