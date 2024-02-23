/**
 * Nuestra primera aplicación en Node se basará en el comando 'dir' o 'ls' de las consolas de Windows y Linux
 * respectivamente. Consiste en leer el contenido de una carpeta o directorio determinado.
 */

const fs = require('node:fs');

// Leeremos el directorio actual
fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error al leer el archivo: ', err);
    return; // Impedimos que, después de lanzar el error, el código se siga ejecutando.
  }

  console.log('\nLista de ficheros: ');
  files.forEach((file) => {
    console.log(file);
  });
});
