
//Destructuring

// 1. Destructuring de arrays ✅

const numeros = [1, 2, 3, 4, 5]

//Asignacion directa
const [a, b] = numeros

// Saltar elementos
const [, , tercero] = numeros;

// Valor por defecto
const [x = 0, y = 0, z = 0, w = 99] = [5];

// Destructuring de Objetos ✅

const persona = {
    nombre: "Luis",
    edad: 30,
    pais: "Ecuador"
};

// Acceder a propiedades
const { nombre, edad } = persona

// Renombrar
const { pais: ubicacion } = persona

// Valor por defecto
const { profesion = "desconocido" } = persona
console.log(persona)
// Rest
const { nombre: n, ...restoInfo } = persona


function saludar({ nombre, edad }) {
    return `Hola ${nombre}, tienes ${edad} años`;
}

const user = { nombre: "Ana", edad: 25 };
console.log(saludar(user));

// Destructuring de Funciones ✅

function saludar({ nombre, edad }) {
    return `Hola ${nombre}, tienes ${edad} años`;
}

const userD = { nombre: "Ana", edad: 25 };
console.log(saludar(userD));


// Destructuring Anidado ✅

const datos = {
    usuario: {
        nombre: "Pedro",
        direccion: {
            ciudad: "Quito"
        }
    }
};

const { usuario: { nombre: nombreUsuario, direccion: { ciudad } } } = datos;

console.log(nombreUsuario); // Pedro
console.log(ciudad);        // Quito


// En Arrays dentro de Objetos ✅

const resultado = { puntajes: [10, 20, 30] };

const { puntajes: [primero, segundo] } = resultado;

console.log(primero);

// En Parámetros con Defaults  ✅

function crearUsuario({ nombre = "Anónimo", rol = "user" } = {}) {
    return `${nombre} tiene rol ${rol}`;
}

console.log(crearUsuario());
console.log(crearUsuario({ nombre: "Luisa" })); 


// En Bucles ✅

const personas = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "María", edad: 28 }
];

for (const { nombre, edad } of personas) {
  console.log(`${nombre} tiene ${edad} años`);
}

// En String ✅
const [letra1, letra2, letra3] = "hey";
console.log(letra1); // j


// Con Arrays como Parámetro ✅
const sumar = ([a, b]) => a + b;
console.log(sumar([3, 4])); // 7
