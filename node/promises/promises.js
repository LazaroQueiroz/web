const http = require('http');

const getTurma = (turma) => {

  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;

  return new Promise(resolve, reject => {

    http.get(url, res => {

      let resultado = '';

      res.on('data', dados => {
        resultado += dados;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }

      });

    });

  });

};

