// Error simple con división
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    let resultado = a / b;
    console.log('Resultado:', resultado);
  } catch (error) {
    console.log('Error:', error.message);
  }
}


dividir(10, 2);  // 5
dividir(5, 0);   // Error: No se puede dividir entre cero

// Parseo de JSON

const jsonString = '{"nombre":"David","edad":30}';

try {
  const obj = JSON.parse(jsonString);
  console.log('Objeto:', obj);
} catch (error) {
  console.log('JSON inválido:', error.message);
}

//Uso de finally

try {
  console.log('Intento ejecutar código');
  throw new Error('Algo salió mal');
} catch (error) {
  console.log('Capturando error:', error.message);
} finally {
  console.log('Esto se ejecuta siempre');
}
