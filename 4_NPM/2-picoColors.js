/**
 * PicoColors es una dependencia que coloreará la salida de nuestros console.log() en la terminal de VSCode, ya que
 * esta, al ser monocromática, es algo difícil de leer.
 * Para instalar Picocolors en nuestro terminal, accederemos a https://www.npmjs.com/package/picocolors
 */

const picocolors = require('picocolors');

console.log(picocolors.red('Este mensaje es rojo'));
console.log(picocolors.bgRed('Este mensaje tiene el fondo rojo'));
console.log(picocolors.bgBlack('Este mensaje tiene el fondo negro'));

