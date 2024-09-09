const carro = {
  velAtual: 0,
  velMax: 100,
  acelerar(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  }, 
  status(){
    return `${this.modelo} at ${this.velAtual}km/h of ${this.velMax}km/h`;
  }

}

const ferrari = {
  modelo: 'F40'
}

Object.setPrototypeOf(ferrari, carro);
ferrari.acelerar();
console.log(ferrari.status());
