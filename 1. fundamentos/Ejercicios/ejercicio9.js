// Ejercicios de Asincronía

// Ejercicio 1: Callback simple
// Crea una función llamada saludar que reciba un nombre y un callback.
// La función debe esperar 1 segundo (usa setTimeout) y luego llamar al callback pasando un saludo personalizado.

function saludar(nombre, callback) {
    setTimeout(() => {
        const mensaje = ("Hola " + nombre)
        callback(mensaje)
    }, 1000)
}

// Ejercicio 2: Promesas encadenadas
// Crea tres funciones que retornen promesas:
// tarea1(), que resuelva después de 1 segundo con el mensaje "Tarea 1 completada"
// tarea2(), que resuelva después de 1.5 segundos con "Tarea 2 completada"
// tarea3(), que resuelva después de 2 segundos con "Tarea 3 completada"
// Luego, encadena las promesas para que se ejecuten en orden y muestre en consola cuando todas estén terminadas.
function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarea 1 completada');
            resolve();
        }, 1000);
    });
}

function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarea 2 completada');
            resolve();
        }, 1500);
    });
}

function tarea3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarea 3 completada');
            resolve();
        }, 2000);
    });
}

// Encadenamos las promesas para que se ejecuten en orden


// Ejercicio 3: Llamada a API con fetch y async/await
// Crea una función llamada obtenerUsuario que haga una petición a la API pública https://jsonplaceholder.typicode.com/users/1 usando fetch y async/await.
// Imprime el nombre del usuario en consola.
// Maneja errores con try/catch y muestra un mensaje si falla.

function obtenerUsuario1() {
    try {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(data => console.log(data.name))
            .catch(err => console.log("Error:", err));
    } catch (error) {
        console.log(error)
    }
}
obtenerUsuario1()
async function obtenerUsuario2() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        console.log(data?.address?.geo?.lat);
    } catch (err) {
        console.log("Error:", err.message);
    }
}
obtenerUsuario2();
