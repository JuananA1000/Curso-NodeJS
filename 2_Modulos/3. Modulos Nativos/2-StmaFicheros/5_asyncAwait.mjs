/**
 * Para leer este tipo de ficheros con async-await, en primer lugar, cambiaremos la extensión de nuestro fichero a .mjs.
 * los Módulos ECMAScript SI tienen soporte para utilizar await.
 */

import { readFile } from 'node:fs/promises';

console.log('___ Contenido de nuestro fichero archivo.txt ___');
const texto1 = await readFile('./archivo.txt', 'utf-8');
console.log('Primer Texto: ', texto1);

console.log('\n');
console.log('** ESTO SE EJECUTA MIENTRAS SE LEE ARCHIVO.TXT **');
console.log('\n');

console.log('___ Contenido de nuestro fichero archivo2.txt ___');
const texto2 = await readFile('./archivo2.txt', 'utf-8');
console.log('Segundo Texto: ', texto2);
