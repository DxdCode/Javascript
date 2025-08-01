// ASINCRONÍA EN JAVASCRIPT

// 1. CALLBACKS
function tareaAsincrona(callback) {
  setTimeout(() => {
    console.log('Tarea terminada');
    callback();
  }, 2000);
}

console.log('--- CALLBACKS ---');
console.log('Inicio');
tareaAsincrona(() => {
  console.log('Callback ejecutado');
});
console.log('Fin');


// 2. PROMESAS

// Simulación de tareas asincrónicas que retornan promesas
function hacerTarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Tarea 1 completada');
      resolve();
    }, 1000);
  });
}

function hacerTarea2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Tarea 2 completada');
      resolve();
    }, 1500);
  });
}

function hacerTarea3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Cambia a false para probar el rechazo
      if (exito) {
        console.log('Tarea 3 completada');
        resolve();
      } else {
        reject('Error en la tarea 3');
      }
    }, 2000);
  });
}

console.log('\n--- PROMESAS ---');
hacerTarea1()
  .then(() => hacerTarea2())
  .then(() => hacerTarea3())
  .then(() => console.log('Todas las tareas terminadas'))
  .catch(error => console.error('Error:', error));

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve('Tarea completada');
    } else {
      reject('Error en la tarea');
    }
  }, 2000);
});

console.log('Inicio promesa simple');

promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('Fin promesa simple');


// 3. ASYNC / AWAIT

async function ejecutarTareas() {
  try {
    await hacerTarea1();
    await hacerTarea2();
    await hacerTarea3();
    console.log('Todas las tareas terminadas (async/await)');
  } catch (error) {
    console.error('Error:', error);
  }
}

console.log('\n--- ASYNC/AWAIT ---');
ejecutarTareas();
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta');
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatos();
