/**
 * Con este primer Módulo Nativo, vamos a obtener información de nuestro Sistema Operativo
 */

const StmaOperativo = require('node:os');

console.log('\n');
console.log('___ Información de nuestro Sistema Operativo ___');
console.log('Nombre: ', StmaOperativo.platform());
console.log('Versión: ', StmaOperativo.release());
console.log('Arquitectura: ', StmaOperativo.arch());
console.log('CPUs: ', StmaOperativo.cpus());
console.log('Mem. Libre: ', StmaOperativo.freemem() / 1024 / 1024);
console.log('Mem. Total: ', StmaOperativo.totalmem() / 1024 / 1024);
console.log('Este equipo lleva encendido ', StmaOperativo.uptime() / 60 / 60, 'horas');
console.log('----------------------------------------------------');
