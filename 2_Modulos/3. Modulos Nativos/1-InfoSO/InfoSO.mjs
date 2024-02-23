/**
 * Ahora haremos el Módulo Nativo anterior con ECMAScript.
 */

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('\n');
console.log('___ Información de nuestro Sistema Operativo ___');
console.log('Nombre: ', platform());
console.log('Versión: ', release());
console.log('Arquitectura: ', arch());
console.log('CPUs: ', cpus());
console.log('Mem. Libre: ', freemem() / 1024 / 1024);
console.log('Mem. Total: ', totalmem() / 1024 / 1024);
console.log('Este equipo lleva encendido ', uptime() / 60 / 60, 'horas');
console.log('----------------------------------------------------');
