/**
 * Generalmente, en JavaScript (y en cualquier lenguaje de programación o librería) realizaremos tareas de manera
 * MODULAR, lo que implica que, para realizar una tarea, quizá, necesitemos varios ficheros. En esta unidad aprenderemos
 * el patrón de diseño MÓDULO.
 */

const { suma, resta, multi, divi } = require('./calc');

console.log('SUM: ', suma(4, 5));
console.log('RES: ', resta(4, 5));
console.log('MUL: ', multi(4, 5));
console.log('DIV: ', divi(4, 5));
