/**
 * El siguiente Módulo Nativo que estudiaremos en Node será path, el cual nos permite crear o recuperar extensiones,
 * crear rutas absolutas, unir rutas, etc.
 */

const path = require('node:path');

// Muestra el tipo de barra que separa las carpetas en las rutas
console.log('Separación de rutas en nuestro S.O.: ', path.sep);

// Unir rutas
const filePath = path.join('content', 'subfolder', 'test.txt'); // Le podemos agregar la cantidad de parámetros que queramos
console.log('Ruta filePath: ', filePath);

const otraRuta = path.join('aaaa', 'bbb', 'ccc', '...', 'fichero.txt');
console.log('Ruta otraRuta: ', otraRuta);

// Mostrar nombre de un fichero
const base = path.basename('/carpeta/subcarpeta/mas-carpetas/fichero.txt');
console.log('Nombre de fichero: ', base);

const baseSinExt = path.basename('/carpeta/subcarpeta/mas-carpetas/fichero.txt', '.txt');
console.log('Nombre de fichero sin extensión: ', baseSinExt);

// Mostrar extensión de un fichero
const ext = path.extname('fichero.txt');
console.log('Extensión del fichero: ', ext);
