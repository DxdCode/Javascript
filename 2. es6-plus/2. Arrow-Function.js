// ARROW FUNCTION =>

// Función tradicional
function saludarClassic(nombre) {
  return `Hola, ${nombre}`;
}
console.log( saludarClassic("David"))

// Arrow function equivalente
const saludarArrow = (nombre) => `Hola, ${nombre}`;

console.log(saludarArrow("David"))


// VARIACIONES

//Usar un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(2))

//Varios parametros
const sumar = (a,b) => a + b
console.log(sumar(2,7))

// Cuerpo
const calcularArea = (base, altura) => {
  const area = (base * altura) / 2;
  return area;
};
console.log(calcularArea(10,54))

// Sin parametros
const hola = () => console.log("Hola mundo");
hola()


// DIFERENCIAS CLAVES THIS

const persona = {
  nombre: "David",
  saludar: function () {
    setTimeout(() => {
      console.log(`Hola, soy ${this.nombre}`);
    }, 1000);
  },
};

persona.saludar();

// Ejemplo
const edades = [15, 22, 30, 17];
const mayores = edades.filter(edad => edad >= 18);
console.log(mayores);
