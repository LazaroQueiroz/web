const fs = require('fs')


const caminho = __dirname + "/arquivo.json";

const conteudo = fs.readFileSync(caminho, 'utf-8');

console.log(conteudo);


fs.readFile(caminho, 'utf-8', (err, response) => {
  if (!err) {
    const config = JSON.parse(conteudo);
    console.log(config.host);
  }
})
