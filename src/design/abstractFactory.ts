/**
 * 抽象工厂接口声明了一组能返回不同抽象产品的方法。
 * 这些产品属于同一个系列,且在主题或概念上具有相关性。
 * 同系列的产品通常能相互搭配使用。
 * 该系列产品可有多个变体，但不同变体的产品不能搭配使用。
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}

/**
 * 具体工厂可生成属于同一变体的系列产品
 * 工厂会确保其创建的产品能相互搭配使用
 * 具体工厂方法签名会返回一个抽象产品，但在方法内部则会对具体产品进行实例化
 */
class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

/**
 * 每个具体工厂中都会包含一个相应的产品变体
 * 这是另一个产品的基本界面。所有产品都可以相互作用，但适当的相互作用只可能在产品之间
 */
class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

interface AbstractProductA {
  usefulFunctionA(): string;
}

interface AbstractProductB {
  // 产品B可以自行处理
  usefulFunctionB(): string;
  /**
   * 抽象工厂确保它创造的所有产品都是符合标准的,相同的变体，因此，兼容其他产品
   * @param collaborator
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA(): string {
    return "A1";
  }
}

class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA(): string {
    return "A2";
  }
}

class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB(): string {
    return "B1";
  }
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return result;
  }
}

class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB(): string {
    return "B2";
  }
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

function clientCodeProductA(factory: AbstractFactory) {
  const productA = factory.createProductA();
  return productA;
}

function clientCodeProductA2(factory: AbstractFactory) {
  const productA2 = factory.createProductA();
  return productA2;
}

function clientCodeProductB(factory: AbstractFactory) {
  const productB = factory.createProductB();
  return productB;
}

function clientCodeProductB2(factory: AbstractFactory) {
    const productB2 = factory.createProductB();
    return productB2;
}

export {
  clientCodeProductA,
  clientCodeProductB,
  ConcreteProductA2,
  ConcreteFactory1,
  ConcreteFactory2,
  clientCodeProductA2,
  clientCodeProductB2,
};
