abstract class Creator {
  abstract factoryMethod(): Product;
  someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return "ConcreteProduct1";
  }
}

interface Product {
  operation(): string;
}

function clintCodeProduct1(creator: Creator) {
  const result = creator.someOperation();
  return result;;
}

export { clintCodeProduct1, ConcreteCreator1 };
