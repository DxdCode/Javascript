// 1️⃣ Copia un array usando spread
const frutas = ["manzana", "banana", "naranja"];
// crea una copia del array
const FrutaCopia = [...frutas]
console.log(FrutaCopia)

// 2️⃣ Une dos arrays usando spread
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
// crea un array combinado
const unirarrays = [...numeros1,...numeros2]
console.log(unirarrays)


// 3️⃣ Copia un objeto con spread
const persona = { nombre: "Ana", edad: 30 };
const copiaObj = { ...persona }; 
console.log(copiaObj)

// 4️⃣ Combina dos objetos con spread
const info = { ciudad: "Quito" };
const contacto = { telefono: "123-456" };
const copiaObjeto = { ...info, ...contacto }; 
console.log(copiaObjeto)


// 5️⃣ Usa rest para recoger argumentos en una función
// crea una función "sumarTodo" que reciba cualquier cantidad de números y los sume
function sumarTodo(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
console.log(sumarTodo(1, 2, 3,4,5,6,7,8))

// 6️⃣ Usa rest para separar el primer número del resto
const lista = [10, 20, 30, 40];
const[primero,...restoNumeross] = lista

// 7️⃣ Usa rest en objetos para separar una propiedad
const user = { id: 1, nombre: "Luis", rol: "admin" };
// extrae "id" y guarda el resto en otro objeto
const  {id,...users} = user
console.log(users)

// 8️⃣ Pasa elementos de un array como argumentos de una función usando spread
// 1️⃣ Array con los datos
const datos = [3, 7, 9];

// 2️⃣ Función que recibe argumentos individuales usando spread
function mostrarMaximo(...numeros) {
    const max = Math.max(...numeros);
    return max
}
console.log(mostrarMaximo(...datos))

// 9️⃣ Añade elementos al principio y final de un array usando spread
const base = [2, 3, 4];
// crea un nuevo array que tenga 1 al inicio y 5 al final
const nueva = [1, ...base, 5];
const nuevaValores = [1, ...base.slice(1, -1), 5];

console.log(nueva)
console.log(nuevaValores)


// 🔟 Clona un objeto y sobrescribe una propiedad con spread
const producto = { id: 1, nombre: "laptop", precio: 1000 };
// crea una copia donde el precio sea 800 sin modificar el original
const nuevoProducto = {...producto, precio:800}
console.log(nuevoProducto)