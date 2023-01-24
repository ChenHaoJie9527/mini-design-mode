/**
 * Creator类声明了工厂方法，该方法应该返回一个Product类的对象。创建者的子类通常提供此方法的实现
 */
abstract class Creator {
  /**
   * 创建者也可能提供一些默认的实现抽象工厂方法
   */
  abstract factoryMethod(): Product;
  /**
   *还要注意的是，尽管它的名字，创建者的主要责任是
   *不创造产品。通常，它包含一些核心业务逻辑
   *依赖于Product对象，由factory方法返回。子类可以
   *通过重写工厂方法间接改变业务逻辑
   *并从中返回不同类型的产品。
   */
  someOperation(): string {
    // 调用factory方法创建Product对象
    const product = this.factoryMethod();
    // 使用 Product 产品方法
    return product.operation();
  }
}

/**
 * 重写工厂方法，以更改产品的类型
 */
class ConcreteCreator1 extends Creator {
  /**
   *注意，方法的签名仍然使用抽象类型，即使具体的产品实际上返回方法。这样，创造者就可以独立于具体的产品类。
   */
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
  someOperation(): string {
    return "hello world";
  }
}

/**
 * Concrete Products提供了Product接口的各种实现
 */
class ConcreteProduct1 implements Product {
  operation(): string {
    return "ConcreteProduct1";
  }
}
class ConcreteProduct2 implements Product {
  operation(): string {
    return "ConcreteProduct2";
  }
}

/**
  Product接口声明了所有具体产品必须执行的操作实现。
*/
interface Product {
  operation(): string;
}

/**
 *客户端代码与具体创建者的实例一起工作，尽管通过
 *其基本接口。只要客户端继续工作与创作者通过
 *基接口，你可以传递给任何创建者的子类。
 */
function clintCodeProduct1(creator: Creator) {
  const result = creator.someOperation();
  return result;
}

function clintCodeProduct2(creator: Creator) {
  const result = creator.someOperation();
  console.log(result);
  return result;
}

export {
  clintCodeProduct1,
  ConcreteCreator1,
  clintCodeProduct2,
  ConcreteCreator2,
};
