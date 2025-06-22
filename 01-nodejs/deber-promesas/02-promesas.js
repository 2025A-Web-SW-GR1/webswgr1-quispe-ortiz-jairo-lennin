const fs = require('fs');
const path = './ejemplo.txt';
const fecha = new Date().toString();

// 1. Usando Callbacks
fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw err;
  const nuevoContenido = data + '\n' + fecha;
  fs.writeFile(path, nuevoContenido, (err) => {
    if (err) throw err;
    console.log('Callback: Archivo actualizado');
  });
});

// 2. Usando Promesas con then/catch
function leerYEscribirConPromesas() {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
  .then(data => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data + '\n' + fecha, (err) => {
        if (err) reject(err);
        resolve('Promesa: Archivo actualizado');
      });
    });
  })
  .then(console.log)
  .catch(console.error);
}
leerYEscribirConPromesas();

// 3. Usando Async/Await
async function leerYEscribirAsync() {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    await fs.promises.writeFile(path, data + '\n' + fecha);
    console.log('Async/Await: Archivo actualizado');
  } catch (err) {
    console.error(err);
  }
}
leerYEscribirAsync();

