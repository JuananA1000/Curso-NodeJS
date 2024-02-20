/**
 * Vamos a mejorar nuestra primera app con el método process que hemos aprendido anteriormente. Con esta aplicació
 * podremos leer el contenido de la carpeta que queramos
 */

const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(dir) {
  let files;

  try {
    files = await fs.readdir(dir);
  } catch {
    console.error(`No se pudo leer la carpeta ${dir}`);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(dir, file);
    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'D -> ' : 'F -> ';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)}bytes ${fileModified}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  console.log('\nInformación de los ficheros: ');
  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo);
  });
}

// Llamada a la función
ls(folder);
