/**
 * PROCESS es un objeto global que informa sobre el proceso actual de ejecución
 */

console.log('Argumentos del proceso: ', process.argv);
/*
Al ejecutar en la consola 'node process.js mas argumentos aqui, nos lanza lo siguiente:
Argumentos del proceso:  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\juana\\OneDrive\\Documentos\\Programación\\NodeJS\\3_Primera_App\\process.js',
    'mas',
    'argumentos',
    'aqui'
  ]

  Cada uno correspondiente a las rutas de cada argumento:
  - Ruta de node
  - Ruta del proceso
  - Cada uno de los argumentos qaue le hemos pasado
*/

// Forzamos la salida del proceso
process.exit(1);
/*
  Códigos del proceso:
  0: Proceso finalizado con éxito 
  1: Ha habido algún error y tenemos que salir porsiaca
*/
