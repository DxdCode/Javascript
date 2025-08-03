// Crea un objeto usando una variable existente como clave y valor automáticamente.
const nombre = "Juan";
const edad = 25;

const persona = { nombre, edad };
console.log(persona); // { nombre: "Juan", edad: 25 }

// Define un método dentro de un objeto sin usar la palabra clave 'function'.
const usuario = {
  saludar() {
    return "Hola!";
  }
};
console.log(usuario.saludar()); // Hola!

// Usa una variable como clave del objeto.
const clave = "correo";
const personas = {
  nombre: "Ana",
  [clave]: "ana@example.com"
};
console.log(personas); // { nombre: "Ana", correo: "ana@example.com" }


// Usa variables y métodos en una sola definición concisa.
const producto = "laptop";
const precio = 1000;

const item = {
  producto,
  precio,
  mostrar() {
    return `${producto} cuesta $${precio}`;
  }
};
console.log(item.mostrar())

// Crea un objeto donde las claves provienen de una lista.
const keys = ["a", "b", "c"];
const valores = [1, 2, 3];

function dsds(keys, valores) {
    const objeto = {};
    for (let i = 0; i < keys.length; i++) {
        objeto[keys[i]] = valores[i];
    }
    return objeto;
}

console.log(dsds(keys,valores))


// Usa un método con `this` dentro del objeto.
const contador = {
  valor: 0,
  incrementar() {
    this.valor++;
  }
};
contador.incrementar();
console.log(contador.valor); // 1

// Crea un objeto anidado con nombres de propiedad computados.
const tipo = "config";
const nombreTema = "tema";
const valor = "oscuro";

const obj = {
  [tipo]: {
    [nombreTema]: valor
  }
};
console.log(obj); 


// Accede fácilmente a datos encapsulados.
const personaA = {
  nombre: "Luis",
  mostrar() {
    return this.nombre;
  }
};
console.log(personaA.mostrar()); // Luis


// Función que retorna objetos usando variables y métodos concisos.
function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad,
    saludar() {
      return `Hola, soy ${nombre}`;
    }
  };
}
console.log(crearUsuario("Pepe", 30).saludar()); // Hola, soy Pepe


// Usa varias claves dinámicas en un solo objeto.
const base = "nivel";
const jugador = {
  nombre: "Mario",
  [`${base}1`]: 100,
  [`${base}2`]: 200
};
console.log(jugador); 
