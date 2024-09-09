const fs = require('fs');

function leArquivo (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

let a = leArquivo('./dados.txt');
a.then(console.log);
