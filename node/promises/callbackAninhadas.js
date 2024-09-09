const http = require('http');
const getTurma = (turma, callback) => {

  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;

  http.get(url, res => {

    let resultado = '';

    res.on('data', dados => {
      resultado += dados;
    });

    res.on('end', () => {
      callback(JSON.parse(resultado));
    });


  })

};

let nomes = [];
getTurma('A', alunos => {
  alunos.forEach(a => console.log(`A: ${a.nome}`));
  getTurma('B', alunos => {
    alunos.forEach(a => console.log(`B: ${a.nome}`));
    getTurma('C', alunos => {
      alunos.forEach(a => console.log(`C: ${a.nome}`));
    })
  })
});
