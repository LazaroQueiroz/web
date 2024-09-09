class Car {

  constructor (brand) {
    let speed = 0;
    this.brand = brand;

    this.acc1 = function() {
      speed += 10;
      console.log(speed);
    };

    this.showThis = function() {
      console.log(this)
    };

    this.acc2 = function() {

      speed += 20;
      console.log(speed);

    };
  }


}

let car1 = new Car("toyota");
car1.acc1();
car1.acc2();
