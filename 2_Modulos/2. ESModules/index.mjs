/**
 * Este fichero tiene la extensión .mjs para utilizar ECMAScript Modules. Actualmente, es la forma preferida para
 * trabajar con NodeJS ya que, CommonJS está prácticamente obsoleto o DEPRECADO. A continuación, explicamos las
 * distintas extensiones que se pueden utilizar:
 *
 * .js --> utiliza por defecto CommonJS
 * .mjs --> forzar el uso de ES Modules
 * .cjs --> forzar el uso de CommonJS
 */

import { suma, resta, multi, divi } from './calc.mjs';

console.log('SUM: ', suma(4, 5));
console.log('RES: ', resta(4, 5));
console.log('MUL: ', multi(4, 5));
console.log('DIV: ', divi(4, 5));
