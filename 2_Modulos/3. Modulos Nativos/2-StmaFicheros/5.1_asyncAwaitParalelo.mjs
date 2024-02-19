/**
 * Para leer este tipo de ficheros con async-await, pero de manera PARALELA
 */

import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'), 
  readFile('./archivo2.txt', 'utf-8')
]).then(([texto1, texto2]) => {
  console.log('___ Contenido de nuestro fichero archivo.txt ___');
  console.log('Primer Texto: ', texto1);
  console.log('___ Contenido de nuestro fichero archivo2.txt ___');
  console.log('Segundo Texto: ', texto2);
});
