/**
 * globalThis es una variable global introducida en ECMAScript 2020 que proporciona una forma estándar de acceder al
 * objeto global en cualquier entorno de ejecución JavaScript.
 *
 * Antes de globalThis, los navegadores tenían window como objeto global en el navegador, pero en Node.js, window no es
 * accesible. En ese caso, utilizaremos global.
 */

console.log('Global: ', globalThis);
// console.log('Window: ', window); Error, porque en Node, Window no es accesible, porque no hay ventanas donde mostrar los datos
