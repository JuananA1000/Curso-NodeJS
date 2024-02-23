/**
 * El FileSystem o Sistema de Archivos es uno de los módulos más importantes de NodeJS.
 * En este primer programa, leeremos las estadísticas de un fichero:
 */

const fileSystem = require('node:fs');

const estadisticas = fileSystem.statSync('./archivo.txt');

console.log('\n');
console.log('___ Información de nuestro fichero archivo.txt ___');
console.log('Es un fichero?: ', estadisticas.isFile());
console.log('Es un directorio?: ', estadisticas.isDirectory());
console.log('Es un enlace simbólico?: ', estadisticas.isSymbolicLink());
console.log('Tamaño: ', estadisticas.size, 'bytes');
console.log('----------------------------------------------------');
