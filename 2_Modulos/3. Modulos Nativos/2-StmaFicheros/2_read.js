/**
 * En esta aplicación, leeremos la información de nuestro archivo.
 */

const fileSystem = require('node:fs');

const texto = fileSystem.readFileSync('./archivo.txt', 'utf-8'); // Lo codificamos en UTF-8 para poder leerlo

console.log('\n');
console.log('___ Contenido de nuestro fichero archivo.txt ___');
console.log(texto);
console.log('----------------------------------------------------');
