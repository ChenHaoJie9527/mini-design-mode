interface Product {
  name: string;
  age: number;
}

abstract class Creator {
  abstract getProduct(): Product;
  getProductName() {
    const product = this.getProduct();
    return product.name;
  }
  getProductAge() {
    const product = this.getProduct();
    return product.age;
  }
}

class ConcreteCreator1 extends Creator {
  getProduct(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreator2 extends Creator {
  getProduct(): Product {
    return new ConcreteProductB();
  }
}

class ConcreteProductA implements Product {
  name: string = "马自达";
  age: number = 2016;
}

class ConcreteProductB implements Product {
  name: string = "丰田";
  age: number = 2016;
}

function clintCodeProduct1(concrete: Creator) {
  const product = concrete.getProduct();
  return product;
}

function clintCodeProduct2(concrete: Creator) {
  const product = concrete.getProduct();
  return product;
}

export {
  ConcreteCreator1,
  ConcreteCreator2,
  clintCodeProduct1,
  clintCodeProduct2,
};
