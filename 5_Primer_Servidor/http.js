/**
 * Vamos a crear nuestro primer servidor con Node, el cual ÚNICAMENTE recibirá peticiones y enviará respuestas.
 */

const http = require('node:http');

// req = peticion, res = respuesta
const servidor = http.createServer((req, res) => {
  console.log('Petición recibida');
  res.end('Hola Mundo, desde el servidor');
});

// servidor.listen(3000, () => {
//   console.log('Servidor escuchando desde el puerto 3000');
// });

// Si no sabemos que puerto utilizar porque sospechamos que todos estan ocupados, hacermos lo siguiente:
servidor.listen(0, () => {
  // Creamos una dirección de localhost clickeable, así no tenemos que escribir el puerto en la url
  console.log(`Servidor escuchando desde el puerto http://localhost:${servidor.address().port}`);
});
