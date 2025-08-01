// 1. Invertir un array sin usar reverse()
// arr: Array de elementos
// Resultado esperado: invertirArray([1,2,3]) => [3,2,1]

const array = [1, 2, 3, 4, 5]
function invertirArray(arr) {
  const arrayInvertido = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arrayInvertido.push(arr[i])
  }
  return arrayInvertido
}

function invertirArrys(arr) {
  if (arr.length === 0) {
    return []
  }
  return ([arr[arr.length - 1]].concat(invertirArray(arr.slice(0, -1))))

}

// 2. Eliminar duplicados sin usar Set
// arr: Array con posibles elementos repetidos
// Resultado esperado: eliminarDuplicados([1,2,2,3]) => [1,2,3]

const arrayDuplicada = [1, 2, 2, 3, 4, 4, 5, 5]
function eliminarDuplicados(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i]
    if (!newArray.includes(elemento)) {
      newArray.push(elemento)
    }
  }
  return newArray
}

// 3. Encontrar el segundo número más grande en un array
// arr: Array de números
// Resultado esperado: segundoMax([5,3,9,1]) => 5

const segundoMaximo = [5, 3, 9, 1]
function segundoMax(arr) {
  let max = 0;
  let segundo = 0;
  for (let num of arr) {
    if (num > max) {
      segundo = max;
      max = num;
    } else if (num > segundo && num !== max) {
      segundo = num;
    }
  }
  const arrayOr = arr.sort((a, b) => b - a)
  return segundo

}
// 4. Obtener el nombre de la persona más joven en una lista de objetos
// lista: Array de objetos {nombre:string, edad:number}
// Resultado esperado: personaMasJoven([{nombre:"Ana",edad:30},{nombre:"Luis",edad:25}]) => "Luis"
const ArraypersonaMasJoven = [{ nombre: "Ana", edad: 30 }, { nombre: "Luis", edad: 25 }, { nombre: "Pepe", edad: 45 }]
function personaMasJoven(lista) {
  let valorMenor = Infinity
  let nombreJoven = ""
  for (let persona of lista) {
    if (persona.edad < valorMenor) {
      valorMenor = persona.edad
      nombreJoven = persona.nombre
    }
  }
  return nombreJoven
}


// 5. Contar la frecuencia de cada palabra en un string (ignora mayúsculas y signos)
// texto: String
// Resultado esperado: contarPalabras("Hola hola mundo!") => { hola: 2, mundo: 1 }
const contarpalabra = "Hola hola mundo!"
function contarPalabras(texto) {
  let nuevoTexto = texto.toLowerCase().replace(/[^\w\s]/g, "");
  let palabras = nuevoTexto.split(" ");
  const objecto = {}
  for (let palabra of palabras) {
    objecto[palabra] = (objecto[palabra] || 0) + 1
  }
  return objecto
}

// 6. Obtener valores de un objeto sin Object.values()
// obj: Objeto cualquiera
// Resultado esperado: valoresObjeto({a:1,b:2}) => [1,2]
const objecto = { a: 1, b: 2 }
function valoresObjeto(obj) {
  const array1 = []
  // Sin propiedad
  for (let valor in obj) {
    array1.push(obj[valor])
  }

  /// Con propiedad
  return Object.values(obj)
}


// 7. Encontrar índice del primer número par que aparece después de un impar
// arr: Array de números
// Resultado esperado: parDespuesDeImpar([1,3,4,6]) => 2

const array1 = [1, 3, 5, 7, 8]

function parDespuesDeImpar(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 1 && arr[i] % 2 === 0) {
      return i
    }
  }
  return -1
}

// 8. Simular Array.prototype.map()
// arr: Array de elementos, fn: función callback que transforma elementos
// Resultado esperado: mapSimulado([1,2,3], x => x*2) => [2,4,6]
const arrays = [1, 2, 3]
function mapSimulado(arr, fn) {
  const array = []
  for (let numeros of arr) {
    const resultado = fn(numeros)
    array.push(resultado)
  }
  return array

}
// 9. Agrupar palabras por primera letra en un objeto
// arr: Array de strings
// Resultado esperado: agruparPorLetra(["ana","alonso","beatriz"]) => { a: ["ana","alonso"], b: ["beatriz"] }
const agrugar = ["ana", "alonso", "beatriz", "pepe", "alberto", "elena", "pedro"]
function agruparPorLetra(arr) {
  const objecto = {}
  for (let nombre of arr) {
    if (!objecto[nombre[0]]) {
      const array = []
      array.push(nombre)
      objecto[nombre[0]] = array
    } else {
      objecto[nombre[0]].push(nombre)
    }
  }
  return objecto
}


// 10. Intersección de dos arrays
// arr1, arr2: Arrays
// Resultado esperado: interseccion([1,2,3], [2,3,4]) => [2,3]
const array2 = [1, 2, 3]
const array3 = [2, 3, 4]

function interseccion(arr1, arr2) {
  const array = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      array.push(arr1[i])
    }
  }
  return array
}



// 11. Suma acumulada de un array
// arr: Array de números
// Resultado esperado: sumaAcumulada([1,2,3]) => [1,3,6]
const arraySuma = [1, 2, 3, 4, 5]

function sumaAcumulada(arr) {
  const array = []
  let acumulado = 0
  for (let i = 0; i < arr.length; i++) {
    acumulado += arr[i]
    array.push(acumulado)
  }
  return array
}
// 12. Resumir cantidades por producto en array de objetos
// arr: Array de objetos {producto:string, cantidad:number}
// Resultado esperado: resumenProductos([{producto:"manzana", cantidad:2}, {producto:"manzana", cantidad:3}]) => { manzana: 5 }
const productoResumen = [{ producto: "manzana", cantidad: 2 }, { producto: "pera", cantidad: 2 }, { producto: "manzana", cantidad: 12 }, { producto: "manzana", cantidad: 3 }]
function resumenProductos(arr) {
  const objecto = {}
  for (let produc of arr) {
    if (objecto[produc.producto]) {
      objecto[produc.producto] += produc.cantidad
    } else {
      objecto[produc.producto] = produc.cantidad
    }
  }
  return objecto
}
// 13. Validar si un string es palíndromo ignorando espacios y mayúsculas
// str: String
// Resultado esperado: esPalindromo("Anita lava la tina") => true
const frase = "Anita lava la tina"
function esPalindromo(string) {
  const frase = string.toLowerCase().replace(/ /g, "")
  const fraseInvertida = frase.split("").reverse().join("")
  return frase === fraseInvertida
}

// 14. Obtener los N elementos más grandes de un array
// arr: Array de números, n: número de elementos a obtener
// Resultado esperado: nMasGrandes([1,5,3,7,2], 3) => [7,5,3]

const numeross = [1,5,3,7,2]
function nMasGrandes(arr, n) {
  if(arr.length >= n){
    const arrayOrdenado = arr.sort((a,b) => b - a )
    return arrayOrdenado.slice(0,n)
  }else{
    return "Numero mayor al array"
  }

}
// 15. Objeto contador con métodos incrementar, decrementar, resetear
// No recibe parámetros directamente
// Resultado esperado: contador.incrementar() aumenta valor, contador.resetear() pone a 0
const contador = {
  valor: 0,
  incrementar() {
    return this.valor+=1
  },
  decrementar() {
    return this.valor-=1
  },
  resetear() {
    return this.valor = 0
  },
};

// 16. Copia profunda (deep copy) sin JSON.parse/stringify
// obj: Objeto con posibles objetos anidados
// Resultado esperado: copiaProfunda(obj) devuelve copia completamente independiente
function copiaProfunda(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copia = Array.isArray(obj) ? [] : {};

  for (let clave in obj) {
    if (obj.hasOwnProperty(clave)) {
      copia[clave] = copiaProfunda(obj[clave]);
    }
  }

  return copia;
}


// 17. Transponer matriz (array de arrays)
// matriz: Array bidimensional
// Resultado esperado: transponer([[1,2,3],[4,5,6]]) => [[1,4],[2,5],[3,6]]
const bidimensional = [[1,2,3],[4,5,6]]
function transponer(matriz) {
  const resultado = [];

  for (let i = 0; i < matriz[0].length; i++) {
    const fila = [];
    for (let j = 0; j < matriz.length; j++) {
      fila.push(matriz[j][i]);
    }
    resultado.push(fila);
  }

  return resultado;
}

console.log(transponer(bidimensional));

// 18. Calcular factorial con recursión
// n: número entero >= 0
// Resultado esperado: factorial(5) => 120
function factorial(n) {
  if(n === 0){
    return 1
  }
  return n * factorial(n-1)
}

// 19. Obtener suma, promedio, máximo y mínimo de un array de números
// arr: Array de números
// Resultado esperado: estadisticas([1,2,3,4]) => { suma: 10, promedio: 2.5, max: 4, min: 1 }

const estadisti = [1,2,3,4]
function estadisticas(arr) {
  // const objecto = {}
  // let suma =0
  // for (let num of arr){
  //   suma+=num
  // }
  // const arrayNumAlto = arr.sort((a,b)=> b - a)
  
  // let max = arrayNumAlto[0]
  // let min = arrayNumAlto[arrayNumAlto.length -1]
  const objecto = {};
  let suma = 0;
  let max = arr[0];
  let min = arr[0];
  
  for (let num of arr) {
    suma += num;
    
    if (num > max) {
      max = num;
    }
    
    if (num < min) {
      min = num;
    }
  }
  let promedio = suma/arr.length

  objecto["Suma"] = suma
  objecto["Promedio"] = promedio
  objecto["max"] = max
  objecto["min"] = min
  return objecto
}
console.log(estadisticas(estadisti))

// 20. Verificar si un array está ordenado ascendentemente
// arr: Array de números
// Resultado esperado: estaOrdenado([1,2,3]) => true, estaOrdenado([3,2,1]) => false
const arrayOr = [1, 2, 3];

function estaOrdenado(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true; 
}

console.log(estaOrdenado(arrayOr)); 
