
// 🧠 10 Ejercicios Tryhard (Enfocados en Objetos y lo que has visto)

// 1. Crear un sistema de login
// Crea un objeto `usuario` con propiedades `usuario`, `password` y una función `login`
// que reciba un usuario y contraseña, y devuelva "Acceso permitido" si coinciden,
// o "Acceso denegado" si no.

const usuario = {
    userUser: "david",
    passPassword: "123",
    login: function (user, password) {
        if (user === this.userUser && password === this.passPassword) {
            console.log("Acceso permitido")
        } else {
            console.log("Acceso denegado")
        }
    }

}
usuario.login("pepe", "123") //Acceso denegado


// 2. Simular un cajero automático
// Crea un objeto `cuenta` con propiedades `titular`, `saldo`,
// y métodos `retirar(monto)` y `depositar(monto)`.
// El método `retirar` debe verificar si hay fondos suficientes antes de restar.

const cuenta = {
    titular: "David",
    saldo: 100,
    retirar: function (retirar) {
        if (this.saldo < retirar) {
            return "Saldo no disponible"
        }
        this.saldo -= retirar
        return this.saldo
        //return this.saldo
    },
    depositar: function (retirar) {
        this.saldo += retirar
        return this.saldo
    }

}
console.log(cuenta.depositar(300))


// 3. Contador de letras personalizadas
// Crea una función que reciba un texto y devuelva un objeto
// donde cada letra (sin espacios) sea una clave,
// y el valor sea cuántas veces aparece en el texto.

function letraPersonalizadas(texto) {
    var objecto = {}
    var objectos = {}

    const textoNuevo = texto.replace(/\s+/g, '')

    // primera forma
    for (let letra of textoNuevo) {
        objecto[letra] = (objecto[letra] || 0) + 1;
    }
    //ssegunda forma
    for (let letra of textoNuevo) {
        if (objectos[letra]) {
            objectos[letra] += 1;
        } else {
            objectos[letra] = 1;
        }
    }

    return objectos

}
const texto = "hola mundo como estas";
console.log(letraPersonalizadas(texto));

// 4. Conversor de temperatura inteligente
// Crea un objeto `temperatura` con una propiedad `valor` en grados Celsius,
// y un getter `fahrenheit` que devuelva el valor convertido automáticamente.
// Agrega un setter que permita actualizar `valor`.
const conversorTemperatura = {
    temperatura: 0,

    get fahrenheit() {
        return (this.temperatura * 9 / 5) + 32
    },
    set fahrenheit(valor) {
        this.temperatura = (valor - 32) * 5 / 9;

    }

}
conversorTemperatura.temperatura = 10;
console.log(conversorTemperatura.fahrenheit);  // 50

conversorTemperatura.fahrenheit = 86;
console.log(conversorTemperatura.temperatura); // 30 


// 5. Sistema de evaluaciones
// Crea un objeto `estudiante` que tenga `nombre`, `nota`,
// y un método `evaluar()` que retorne si está "Aprobado" o "Reprobado"
// según la nota (60 puntos o más).

const estudiante = {
    nombre: "David",
    nota: 0,
    evaluar: function () {
        if (this.nota > 60) {
            return "Aprobado"
        } else {
            return "Reprobado"
        }
    }
}
estudiante.nota = 100;
console.log(estudiante.evaluar()); // Aprobado

estudiante.nota = 55;
console.log(estudiante.evaluar()); // Reprobado

// 6. Diccionario personalizado
// Crea un objeto tipo diccionario con varias palabras como claves
// y sus definiciones como valores.
// Luego crea una función `buscar(palabra)` que devuelva la definición
// o "Palabra no encontrada".

const diccionario = {
    perro: "Animal doméstico que ladra.",
    casa: "Lugar donde vive una persona o familia.",
    computadora: "Máquina electrónica para procesar datos.",
    libro: "Conjunto de hojas con texto o imágenes encuadernadas.",
    sol: "Estrella que da luz y calor a la Tierra.",

    buscar: function (palabra) {
        return this[palabra] || "No se encontro"
    }
}
console.log(diccionario.buscar("car")) //No se encontro
console.log(diccionario.buscar("sol")) //Estrella que da luz y calor a la Tierra.

// 7. Simulador de luz inteligente
// Crea un objeto `luz` con un estado inicial `apagada`,
// y métodos `encender()` y `apagar()`.
// Agrega una propiedad `estado` que indique si está "encendida" o "apagada".

const luz = {
    estado: "apagado",
    encender: function () {
        if (this.estado === "apagado") {
            this.estado = "encendido"
            return "La luz se ha encendidad"
        }
        return "La luz ya esta encendida"
    },
    apagar: function () {
        if (this.estado === "encendido") {
            this.estado = "apagado"
            return "La luz se ha apagada"
        }
        return "La luz ya esta apagada"
    },
}

console.log(luz.encender()); // La luz se ha encendido
console.log(luz.estado);     // encendido
console.log(luz.apagar());   // La luz se ha apagado
console.log(luz.estado);     // apagado
console.log(luz.apagar());   // La luz ya esta apagada



// 8. Validador de campos de usuario
// Crea una función `validar(usuario)` que reciba un objeto
// con las propiedades `nombre`, `edad`, y `correo`.
// Valida que:
// - `nombre` no esté vacío
// - `edad` sea mayor o igual a 18
// - `correo` contenga un "@"
// Devuelve "Válido" o "Inválido".

function validar(usuario) {
    if (usuario.nombre === "") {
        return "Nombre inválido: no puede estar vacío.";
    }
    if (usuario.edad < 18) {
        return "Edad inválida: debe ser mayor o igual a 18.";
    }
    if (!usuario.correo.includes("@")) {
        return "Correo inválido: debe contener un '@'.";
    }

    return "Valido"
}

user = {
    nombre: "David",
    edad: 222,
    correo: "davidgmail.com"
}

console.log(
    validar(user)
)


// 9. Creador de identificadores únicos
// Crea una función `crearID(nombre)` que reciba un nombre
// y devuelva un objeto con el nombre original y una propiedad `id`
// que sea el nombre en mayúsculas más una cantidad de caracteres.

function crearID(nombre) {
    return {
        nombre: nombre,
        id: "2024" + nombre.toUpperCase()
    }
}
console.log(crearID("david"))

// 10. Gestor de tareas (sin arrays)
// Simula un sistema de tareas usando un objeto
// donde cada clave sea el nombre de la tarea y su valor sea "pendiente" o "completado".
// Crea funciones para agregar, marcar como completada, y mostrar todas las tareas con su estado.



const sistemaTarea = {
    tareas: {},
    agregar: function (nombre) {
        this.tareas[nombre] = "pendiente"
    },
    completar: function (nombre) {
        if (this.tareas[nombre]) {
            this.tareas[nombre] = "completado";
        } else {
            console.log(`La tarea "${nombre}" no existe.`);
        }
    },
    mostrar: function () {
        return this.tareas;
    }
}

// Uso del sistema:
sistemaTarea.agregar("tareaCasa");
sistemaTarea.agregar("estudiarJS");

sistemaTarea.completar("tareaCasa");
console.log(sistemaTarea.mostrar());

// 🧪 5 Ejercicios Estilo Prueba Técnica Junior

// 11. Validador de acceso con niveles de rol
// Crea un objeto `usuario` con propiedades: `nombre`, `rol` ("admin", "user", "guest").
// Escribe una función `tienePermiso(usuario)` que devuelva:
// - "Acceso total" si el rol es "admin"
// - "Acceso limitado" si el rol es "user"
// - "Sin acceso" si el rol es "guest"
const usuariobd = {
    nombre: "David",
    rol: "admin"
};

function tienePermiso(usuario) {
    if (usuario.rol === "admin") {
        return "Acceso total";
    } else if (usuario.rol === "user") {
        return "Acceso limitado";
    } else if (usuario.rol === "guest") {
        return "Sin acceso";
    } else {
        return "Rol desconocido";
    }
}

console.log(tienePermiso(usuariobd)); // Acceso total


// 12. Calculadora de precio con impuestos
// Crea una función `calcularPrecio(producto)` que reciba un objeto con las propiedades:
// `nombre`, `precio`, y `categoria`.
// Si la categoría es "tecnología", suma el 15% de impuesto. Si es "ropa", suma el 8%.
// Devuelve el objeto original con una nueva propiedad `precioFinal`.

const propiedad = {
    nombre: "David",
    precio: 5,
    categoria: "tecnologia"
}

function calcularPrecio(producto) {
    if (producto.categoria === "tecnologia") {
        producto.precioFinal = producto.precio + (producto.precio * .15)
        return producto
    } else if (producto.categoria === "ropa") {
        producto.precioFinal = producto.precio + (producto.precio * .08)
        return producto
    } else {
        producto.precioFinal = producto.precio
        return producto
    }
}
console.log(calcularPrecio(propiedad))

// 13. Sistema de autenticación con intento fallido
// Crea un objeto `login` con propiedades `usuario`, `password` y `intentos`.
// Escribe un método `autenticar(usuario, pass)` que:
// - Si los datos son correctos, diga "Bienvenido" y reinicie intentos.
// - Si no, aumente los intentos y diga "Error. Intentos: X".
// - Si hay 3 intentos fallidos, diga "Cuenta bloqueada".

const login = {
    usuario: "David",
    password: "123",
    intento: 0,
    autenticar: function (usuario, pass) {
        if (this.usuario === usuario && this.password === pass) {
            this.intentos = 0;
            return "Bienvenido";
        } else {
            this.intento++;
            if (this.intento >= 3) {
                return "Cuenta bloqueada";
            }
            return `Error. Intentos: ${this.intento}`;
        }
    } 
}
console.log(login.autenticar("David", "1sa23"))
console.log(login.autenticar("David", "12sas3"))
console.log(login.autenticar("David", "123"))



// 14. Generador de usuario anónimo
// Crea una función `crearUsuario(nombre)` que devuelva un objeto con:
// - `nombre` original,
// - `anonimo`, un string formado por "user_" + los primeros 3 caracteres del nombre + número de caracteres.
// Ejemplo: "David" => { nombre: "David", anonimo: "user_Dav5" }

function crearUsuario(nombre){
    const objecto = {}
    let primerasLetras = ""
    for (let i = 0;i < 3; i++){
        primerasLetras += nombre[i]
    }
    const anonimo = "user_" + primerasLetras + nombre.length
    objecto.nombre = nombre
    objecto.anonimo = anonimo
    return objecto
}
console.log(crearUsuario("David"))

// 15. Verificador de configuración
// Crea un objeto `config` con las propiedades:
// `modoOscuro` (boolean), `idioma` (string), `notificaciones` (boolean).
// Escribe una función `verificar(config)` que devuelva un mensaje:
// - "Modo oscuro activado" si está activado
// - "Idioma no soportado" si el idioma no es "es" o "en"
// - "Notificaciones desactivadas" si están en false

const config = {
  modoOscuro: true,
  idioma: "en",
  notificaciones: false
}


function verificar(config){
    if(config.modoOscuro === true){
        return "Modo oscuro activado"
    }else if(config.idioma !== "es" && config.idioma !== "en"){
        return "Idioma no soportado"
    }else if(config.notificaciones === false){
        return "Notificaciones desactivadas"
    }
}
console.log(verificar(config))