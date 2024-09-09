const port = 3003;

const express = require('express');
const bd = require('./bd');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res, next) => {
  res.send(bd.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  res.send(bd.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {

  const produto = bd.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  });

  res.send(produto);

});

app.listen(port, () => console.log(`executing at port ${port}`))

