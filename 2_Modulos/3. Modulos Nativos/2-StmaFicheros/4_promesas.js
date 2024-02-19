/**
 * En realidad, la asincrona en Node, se maneja con PROMESAS y no con callbacks como hemos hecho en el ejemplo anterior
 */

const fileSystem = require('node:fs/promises');

console.log('___ Contenido de nuestro fichero archivo.txt ___');
fileSystem.readFile('./archivo.txt', 'utf-8')
  .then((texto) => {
    console.log('Primer Texto: ', texto);
  });

console.log('\n');
console.log('** ESTO SE EJECUTA MIENTRAS SE LEE ARCHIVO.TXT **');
console.log('\n');

console.log('___ Contenido de nuestro fichero archivo2.txt ___');
fileSystem.readFile('./archivo2.txt', 'utf-8')
  .then((texto) => {
    console.log('Segundo Texto: ', texto);
  });
