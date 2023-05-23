class Calc {
    constructor() {
      this.a;
      this.b;
    }
    add(a, b) {
      this.a = a;
      this.b = b;
      let sum = this.a + this.b;
      return sum;
    }
    subtract(a, b) {
      this.a = a;
      this.b = b;
      let sub = this.a - this.b;
      return sub;
    }
    multiply(a, b) {
      this.a = a;
      this.b = b;
      return this.a * this.b;
    }
    divide(a, b) {
      this.a = a;
      this.b = b;
      return this.a / this.b;
    }
  }
module.exports=Calc