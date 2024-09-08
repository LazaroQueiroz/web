function criarProduto(nome, preco) {

  return {
    nome: nome, 
    preco: preco, 
    desconto: 0.25
  }
}

const prod1 = criarProduto("tablet s9", 1500);
const prod2 = criarProduto("macbook", 6000);
console.log(prod1);
console.log(prod2);

function Pessoa() {

  this.nome = nome;

  this.falar = function falar() {

    console.log(`Ola, ${this.nome}!`);

  }

}

const pessoa1 = new Pessoa("Lazinho");
const pessoa2 = new Pessoa("Lazinho");
console.log(pessoa1, pessoa2);
