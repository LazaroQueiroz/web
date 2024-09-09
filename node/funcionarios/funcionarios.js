const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
  const funcionarios = response.data;

  const chinesaMenorSalario = funcionarios.filter(a => a.genero == 'M').filter(a => a.pais == 'China').reduce((a, b) => a.salario < b.salario ? a : b);
  console.log(chinesaMenorSalario);
});
