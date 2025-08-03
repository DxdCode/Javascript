// 1️⃣ Extraer variables básicas
// Dado el siguiente objeto, usa destructuring para extraer las propiedades 'nombre' y 'edad'.
const persona = { nombre: "Ana", edad: 28, ciudad: "Quito" };
const { nombre , edad } = persona
console.log(nombre, edad)

// 2️⃣ Destructuring con arrays
// Usa destructuring para obtener el primer y segundo elemento del array.
const colores = ["rojo", "verde", "azul", "amarillo"];
const [primero,segundo] = colores
console.log(primero,segundo)

// 3️⃣ Valores por defecto
// Realiza destructuring de este objeto y asigna un valor por defecto a la propiedad 'pais' si no existe.
const usuario = { nombre: "Carlos", edad: 35 };
const usuarioConPais = { ...usuario, pais: "Ecuador" };
console.log(usuarioConPais)

// 4️⃣ Renombrar variables
// Usa destructuring para extraer la propiedad 'nombre' y renómbrala como 'nombreUsuario'.
const data = { nombreP: "Laura", correo: "laura@example.com" };
const { nombreP: nombreUsuario } = data;
console.log(nombreUsuario)

// 5️⃣ Destructuring en funciones
// Usa destructuring en los parámetros de la función para extraer 'titulo' y 'autor'.
const libro = { titulo: "1984", autor: "Orwell", año: 1949 };
function imprimirLibro(obj) {
    const {titulo,autor} = obj
    return titulo,autor
}
console.log(imprimirLibro(libro))

// 6️⃣ Destructuring anidado
// Usa destructuring para extraer el 'lat' del objeto 'geo' dentro de 'direccion'.
const persona2 = {
  nombre: "David",
  direccion: {
    ciudad: "Guayaquil",
    geo: {
      lat: -2.1,
      lng: -79.9
    }
  }
};

const {direccion:{geo:{lat}}} = persona2
console.log(lat)

// 7️⃣ Swapping de variables con destructuring
// Intercambia los valores de 'a' y 'b' sin usar una variable temporal.
let a = 5;
let b = 10;
[a, b] = [b, a];

// 8️⃣ Destructuring de arrays anidados
// Usa destructuring para obtener el valor 3 del siguiente array.
const numeros = [1, [2, 3], 4];
const[,[,segundoNumero]] = numeros
console.log(segundoNumero)

// 9️⃣ Parámetros con destructuring y valores por defecto
// Completa la función para que use destructuring en los parámetros y asigne valores por defecto.
function crearUsuario({ nombre, rol = "usuario" }) {
  return `${nombre} tiene rol ${rol}`;
}
console.log(crearUsuario({nombre:"pepe",rol:"admin"}))


// 🔟 Mezcla de objetos y arrays
// Usa destructuring para obtener el segundo tag y el nombre del usuario.
const post = {
  usuario: { nombre: "Mario", id: 1 },
  tags: ["js", "web", "node"]
};
const{tags:[,second]} = post
console.log(second)