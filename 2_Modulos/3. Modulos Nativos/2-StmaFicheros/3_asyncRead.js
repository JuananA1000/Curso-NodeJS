/**
 * En esta aplicación, leeremos la información de nuestro archivo pero, de manera ASÍNCRONA. Para ello haremos uso de
 * los famosos CALLBACKS de JavaScript, que se ejecutan cuando una función ya ha terminado.
 */

const fileSystem = require('node:fs');

console.log('___ Contenido de nuestro fichero archivo.txt ___');
fileSystem.readFile('./archivo.txt', 'utf-8', (error, texto) => {
  console.log('Primer Texto: ', texto);
});

console.log('\n');
console.log('** ESTO SE EJECUTA MIENTRAS SE LEE ARCHIVO.TXT **');
console.log('\n');

console.log('___ Contenido de nuestro fichero archivo2.txt ___');
fileSystem.readFile('./archivo2.txt', 'utf-8', (error, texto) => {
  console.log('Segundo Texto: ', texto);
});
