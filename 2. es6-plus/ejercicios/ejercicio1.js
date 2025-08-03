// 🧠 EJERCICIOS TRYHARD - ARROW FUNCTIONS & ES6

// 1️⃣ Escribe una función flecha que reciba un array de strings y retorne un nuevo array con las longitudes de cada string.
// Ej: ["hola", "mundo"] → [4, 5]

const fun = (arr) => {
    const array = []
    for (let palabra of arr) {
        array.push(palabra.length)
    }
    return array
}
console.log(fun(["hola", "mundo"]))

// 2️⃣ Crea una función flecha que reciba un número y retorne true si es primo, false si no lo es.
// (Pista: usa un bucle para verificar si tiene divisores entre 2 y n-1)

const funcion2 = (numero) => {
    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }
    return numero !== 1
}
console.log(funcion2(3))

// 3️⃣ Dado un array de objetos con {nombre, edad}, usa `.filter` y una función flecha para retornar solo los mayores de 18 años.

const personas = [
    { nombre: "Juan", edad: 10 },
    { nombre: "Maria", edad: 25 },
    { nombre: "Lucas", edad: 35 },
    { nombre: "Pedro", edad: 18 },
    { nombre: "Jennifer", edad: 15 }
]
const personaa = personas.filter(p => p.edad > 18)
console.log(personaa)


// 4️⃣ Crea una función flecha que reciba dos fechas y retorne la cantidad de días entre ellas.
// (Pista: convierte a ms con Date y resta, luego convierte a días)

const diferenciaDeDias = (fecha1, fecha2) => {
    const diferenciaEnMs = fecha2.getTime() - fecha1.getTime();
    const unDiaEnMs = 1000 * 60 * 60 * 24;
    return Math.floor(diferenciaEnMs / unDiaEnMs);
};

// 5️⃣ Crea una función flecha que reciba un array de números y retorne el promedio sin usar `.reduce`

const array = [1, 2, 3, 4, 5]
const promedio = (arr) => {
    let suma = 0
    let promedio = 0

    for (let i of arr) {
        suma += i
    }
    promedio = suma / arr.length
    return promedio

}
console.log(promedio(array))

// 6️⃣ Usa una arrow function para invertir un string. Ej: "Hola" → "aloH"
// (Pista: string → array → reverse → join)

const invertir = (string) => string.split("").reverse().join("")
console.log(invertir("Hola"))


// 7️⃣ Crea una función flecha que reciba una lista de palabras y devuelva la que tiene más vocales.
const palabras = ["camino", "murciélago", "flor", "espejismo"];

const palabraConMasVocales = (palabras) => {
    const contarVocales = (palabra) => palabra.split('').filter(letra => 'aeiouáéíóúAEIOUÁÉÍÓÚ'.includes(letra))?.length || 0;

    let maxVocales = 0;
    let palabraMax = "";

    for (let palabra of palabras) {
        const numVocales = contarVocales(palabra);
        if (numVocales > maxVocales) {
            maxVocales = numVocales;
            palabraMax = palabra;
        }
    }

    return palabraMax;
};



console.log(palabraConMasVocales(palabras))
// 8️⃣ Genera una función flecha que reciba una frase y devuelva un objeto con la cantidad de cada vocal que aparece en ella.
// Ej: "Hola mundo" → { a: 1, e: 0, i: 0, o: 2, u: 1 }
const frase = "Hola mundo"
const cantidadVocales = (frase) => {
    const objecto = {a:0,e:0,i:0,o:0,u:0}
    for (const vocal of frase.toLowerCase()) {
        if("aeiou".includes(vocal)){
            objecto[vocal]++
        }
    }
    return objecto
}
const cantidadVocaless = (frase) => {
  const fraseModificada = frase.toLowerCase();
  const objecto = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const vocales = "aeiou";

  for (const vocal of fraseModificada) {
    if (vocales.includes(vocal)) {
      objecto[vocal]++;
    }
  }

  return objecto;
};

console.log(cantidadVocales(frase));

console.log(cantidadVocales(frase))
// 9️⃣ Usa una arrow function que reciba un array de números y devuelva sólo los que son potencias de 2 (2, 4, 8, 16...)
// (Pista: usa log2 o una función matemática)
const potenciasDe2 = (numeros) => numeros.filter(n => Number.isInteger(Math.log2(n)));

console.log(potenciasDe2([1, 2, 3, 4, 5, 8, 10, 16, 18, 32]));


// 🔟 Escribe una función flecha que simule el juego "piedra, papel o tijera".
// Recibe dos strings y devuelve quién gana o si es empate. Ej: "piedra", "tijera" → "Jugador 1 gana"
const jugar = (jugador1, jugador2) => {
  if (jugador1 === jugador2) return "Empate";
  if (jugador1 === "piedra" && jugador2 === "tijera") return "Jugador 1 gana";
  if (jugador1 === "tijera" && jugador2 === "papel") return "Jugador 1 gana";
  if (jugador1 === "papel" && jugador2 === "piedra") return "Jugador 1 gana";
  return "Jugador 2 gana";
};
console.log(jugar("piedra", "tijera"))



