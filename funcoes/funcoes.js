function f1() {
  return this;
} 

console.log(f1())

const obj = {
  retorno: () => this 
}
console.log(obj.retorno())

function f2 (a, b) {
  return function (c) {
    return a + b + c;
  }
}
f3 = f2(5, 5);
f3(5);
const f = () => null
console.log(f());

// usando o arguments
function fun () {
  let sum = 0;
  for (let arg of arguments) {
    sum += arg;
  }
  return sum;
}
console.log(fun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function Pessoa() {
  this.idade = 0;
  setInterval(function() {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}
new Pessoa();

class Cachorro () {

  function Cachorro() {

  }

}
