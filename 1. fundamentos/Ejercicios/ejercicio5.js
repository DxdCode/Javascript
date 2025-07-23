// 1️⃣ Función declarada calcularAreaRectangulo(base, altura)
// Calcula el área de un rectángulo. Si alguno no es número o es negativo, retorna "Datos inválidos".

function calcularAreaRectangulo(base, altura){
    if(typeof base === 'number' &&  base > 0 && typeof altura === 'number' && altura > 0 ){
        return base * altura

    }else{
        return 'Datos invalidos'
    }
}
console.log(
calcularAreaRectangulo('dsds',20)
    
)
// 2️⃣ Función expresada esNumeroPrimo(num)
// Determina si un número es primo (retorna true o false). Usa bucles y condiciones.


function esNumeroPrimo(num) {
    if (num <= 1) {
        console.log("Numero negativo o 1 no son primos")
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("No es numero primo")
            return false; 
        }
    }
    console.log("Es numero primo")
    return true;

}
esNumeroPrimo(3)
// 3️⃣ Función flecha convertirTemperatura(valor, unidad)
// Convierte temperatura entre Celsius y Fahrenheit.
//     Si unidad es "C", convierte a Fahrenheit.
//     Si unidad es "F", convierte a Celsius.
//     Para otro valor retorna "Unidad no válida".


// 4️⃣ Función declarada clasificarNumero(num)
// Retorna "Positivo", "Negativo" o "Cero" según el número. Usa if/else.

function clasificarNumero(num){
    if(num > 0){
        return "Positivo"
    }else if(num < 0){
        return "Negativo"
    }else{
        return "Cero"
    }
}
console.log(clasificarNumero(0))

// 5️⃣ Función expresada sumarImpares(arr)
// Recibe un array de números y retorna la suma solo de los números impares.

const numeros = [1,3,5,2,57,7,12,51,64,12,17]
function sumarImpares(arr){
    let sumar = 0
    for (let i = 0;i < arr.length;i++){
        if( arr[i]%2 === 1){
            sumar+=arr[i]
        }
    
    }
    return sumar
}
console.log(sumarImpares(numeros))
// 6️⃣ Función flecha mayorDeTres(a, b, c)
// Retorna el mayor entre tres números. Usa operadores y condiciones.

const mayorDeTres = (a,b,c) => { 
    if (a >= b && a >= c) {return a } else if (b >= a &&  b >= c ) {return b} else {return c} 
}
console.log(mayorDeTres(4,5,8))

// 7️⃣ Función declarada calcularDescuento(precio, descuento)
// Calcula y retorna el precio final luego de aplicar un descuento en porcentaje (ej: 20%).

function calcularDescuento(precio,descuento){
    return precio - ((descuento * precio)/100)
}
console.log(calcularDescuento(10,20))


// 8️⃣ Función expresada contarVocales(texto)
// Cuenta y retorna cuántas vocales (a, e, i, o, u) tiene un texto (ignore mayúsculas).

const parrafo = 'Hola que tal'

function contarVocales(texto){
    vocales = ['a','e','i','o','u']
    let total = 0
    for (let caracter of texto){
        vocales == caracter
        total+=1

    }
}

console.log(contarVocales(parrafo))

// 9️⃣ Función flecha repetirTexto(texto, veces)
// Retorna un string que repite el texto la cantidad de veces indicada.

// 🔟 Función declarada fizzBuzz(n)
// Imprime los números del 1 al n, pero:

//     Si es múltiplo de 3 imprime “Fizz”
//     Si es múltiplo de 5 imprime “Buzz”
//     Si es múltiplo de ambos imprime “FizzBuzz”
//     Sino imprime el número.

// 11️⃣ Función esPalindromo(texto)
// Retorna true si el texto es palíndromo (se lee igual de izquierda a derecha y derecha a izquierda), ignorando espacios y mayúsculas.

// 12️⃣ Función filtrarPares(arr)
// Recibe un array y retorna un nuevo array que contiene solo los números pares del original.

// 13️⃣ Función potencia(base, exponente=2)
// Calcula la potencia de base elevado al exponente, con el exponente opcional que por defecto es 2.

// 14️⃣ Función procesarArray(arr, callback)
// Aplica una función callback a cada elemento del array y retorna un nuevo array con los resultados.

// 15️⃣ Función obtenerNombres(personas)
// Recibe un array de objetos con propiedades nombre y edad, y retorna un array solo con los nombres.

// 16️⃣ Función dividir(a, b)
// Retorna la división de a entre b; si b es 0, lanza un error para evitar división inválida.

// 17️⃣ Función sumarArray(arr)
// Suma todos los números en un array usando recursión y retorna el resultado.

// 18️⃣ Función evaluarNota(nota)
// Retorna "Aprobado" si la nota es mayor o igual a 60, y "Reprobado" si es menor.

// 19️⃣ Función crearContador()
// Retorna una función que incrementa y muestra un contador interno cada vez que se llama (usa closure).

// 20️⃣ Función clasificarEdad(edad)
// Retorna "Niño", "Adolescente", "Adulto" o "Adulto mayor" según el rango de edad.
