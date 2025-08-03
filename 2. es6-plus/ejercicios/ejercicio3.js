// 💼 EJERCICIOS DE ALGORITMOS - NIVEL PRUEBA TÉCNICA

// 1️⃣ Suma objetivo con pares
// Dado un array de enteros y un número `k`, encuentra si existen dos elementos distintos en el array cuya suma sea exactamente `k`.
// La función debe devolver un booleano.
// Ejemplo:
// hasPairWithSum([10, 15, 3, 7], 17) → true  // (10 + 7 = 17)
// hasPairWithSum([1, 2, 3, 4], 8) → false
const array = [10, 15, 3, 7]
function hasPairWithSum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true
      }
    }
  }
  return false
}
function hasPairWithSum(array, valorBuscar) {
  const vistos = new Set()
  for (let num of array) {
    const completamentoNum = valorBuscar - num
    if (vistos.has(completamentoNum)) {
      return true
    }
    vistos.add(num)
  }
  return frase
}
console.log(hasPairWithSum(array, 25))

// 2️⃣ Substring más largo sin caracteres repetidos
// Dada una cadena de texto, devuelve la longitud de la subcadena más larga que no contenga caracteres repetidos.
// Ejemplo:
// lengthOfLongestSubstring("abcabcbb") → 3 ("abc")
// lengthOfLongestSubstring("bbbbb") → 1 ("b")
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // Mientras el carácter está repetido, mueve left y elimina caracteres
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb"));

// 3️⃣ Agrupar anagramas
// Dado un array de strings, agrupa los que son anagramas entre sí en subarrays.
// Ejemplo:
// agruparAnagramas(["bat", "tab", "tap", "pat", "cat"]) → [["bat", "tab"], ["tap", "pat"], ["cat"]]
const arrayAna = ["bat", "tab", "tap", "pat", "cat"]
const agruparAnagramas = (arr) => {
  const grupos = {};

  for (let valor of arr) {
    const clave = valor.split("").sort().join("");

    if (!grupos[clave]) {
      grupos[clave] = [];
    }

    grupos[clave].push(valor);
  }

  return Object.values(grupos);
}

const agruparAnagramass = (arr) => {
  const grupos = [];

  for (const palabra of arr) {
    const clave = palabra.split('').sort().join('');
    let encontrado = false;

    for (const grupo of grupos) {
      const claveGrupo = grupo[0].split('').sort().join('');
      if (clave === claveGrupo) {
        grupo.push(palabra);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      grupos.push([palabra]);
    }
  }

  return grupos;
};

console.log(agruparAnagramass(arrayAna));
console.log(agruparAnagramas(arrayAna))


// 4️⃣ Número que no se repite
// Dado un array donde todos los elementos se repiten exactamente dos veces excepto uno, encuentra el que no se repite.
// Ejemplo:
// encontrarUnico([2, 3, 4, 2, 3]) → 4

const arrayRepetido = [2, 3, 4, 2, 3]

const fun = (arr) => {
  let numero = 0
  for (let num of arr) {
    numero = num ^ numero
  }
  return numero
}

const encontrarUnico = (arr) => {
  const mapa = new Map();

  for (let num of arr) {
    mapa.set(num, (mapa.get(num) || 0) + 1);
  }

  for (let [clave, valor] of mapa.entries()) {
    if (valor === 1) return clave;
  }
};

const encontrarUnicos = (arr) => {
  const contador = {};

  for (let num of arr) {
    contador[num] = (contador[num] || 0) + 1;
  }

  for (let num in contador) {
    if (contador[num] === 1) return Number(num);
  }
};



// 5️⃣ Pico de una montaña
// Un array representa una montaña si primero sube estrictamente y luego baja estrictamente.
// Encuentra el pico (valor máximo local) de esa montaña.
// Ejemplo:
// encontrarPico([1, 3, 7, 8, 5, 2]) → 8
const encontrarPicoda = [1, 3, 7, 8, 5, 2]
function encontrarPico(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return arr[i]
    }
  }
  return null
}
console.log(encontrarPico(encontrarPicoda))
// 6️⃣ Validar paréntesis
// Verifica si una cadena contiene paréntesis, corchetes y llaves correctamente balanceados.
// Ejemplo:
// esValido("()[]{}") → true
// esValido("(]") → false

function esValido(cadena) {
  const pila = [];
  const pares = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of cadena) {
    if (['(', '[', '{'].includes(char)) {
      pila.push(char);
    } else if ([')', ']', '}'].includes(char)) {
      if (pila.length === 0) return false;
      const ultimo = pila.pop();
      if (pares[char] !== ultimo) return false;
    }
  }

  return pila.length === 0;
}

console.log(esValido("()[]{}"));

// 7️⃣ Encontrar duplicado
// Dado un array de n+1 elementos donde cada elemento es un entero entre 1 y n, encuentra el número duplicado.
// Ejemplo:
// encontrarDuplicado([1, 3, 4, 2, 2]) → 2
function encontrarDuplicado(arr) {
  const vistos = new Set();

  for (const num of arr) {
    if (vistos.has(num)) {
      return num;
    }
    vistos.add(num);
  }
  return null;
}

// 8️⃣ Producto del array excepto el índice actual
// Dado un array de enteros, retorna un nuevo array donde cada elemento es el producto de todos los demás elementos excepto él mismo.
// No puedes usar división.
// Ejemplo:
// productoExceptoIndice([1, 2, 3, 4]) → [24, 12, 8, 6]
function productoExceptoIndiceSinDivision(arr) {
  const n = arr.length;
  const resultado = new Array(n).fill(1);

  let productoIzquierda = 1;
  for (let i = 0; i < n; i++) {
    resultado[i] = productoIzquierda;
    productoIzquierda *= arr[i];
  }

  let productoDerecha = 1;
  for (let i = n - 1; i >= 0; i--) {
    resultado[i] *= productoDerecha;
    productoDerecha *= arr[i];
  }

  return resultado;
}

// 9️⃣ Rotar matriz 90 grados
// Dada una matriz NxN (array de arrays), rota la matriz 90 grados en sentido horario, modificando la matriz original.
// Ejemplo:
// rotarMatriz([
//   [1, 2],
//   [3, 4]
// ]) → [
//   [3, 1],
//   [4, 2]
// ]
function rotarMatriz(matriz) {
  const n = matriz.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matriz[i][j], matriz[j][i]] = [matriz[j][i], matriz[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matriz[i].reverse();
  }
  return
}



// 🔹 FizzBuzz funcional
// Para los números del 1 al n, devuelve un array donde:
// - "Fizz" si el número es divisible por 3
// - "Buzz" si es divisible por 5
// - "FizzBuzz" si es divisible por ambos
// - El número mismo si no es divisible por ninguno
// Ejemplo:
// fizzBuzz(5) → [1, 2, "Fizz", 4, "Buzz"]

function fizzBuzz(n) {
  let array = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz")

    } else if (i % 3 === 0) {
      array.push("Fizz")

    } else if (i % 5 === 0) {
      array.push("Buzz")

    }else{
      array.push(i)
    }


  }

  return array
}
console.log(fizzBuzz(25))