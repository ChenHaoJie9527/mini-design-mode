/**
 * 生成器模式是 TypeScript 世界中的一个著名模式。 当你需要创建一个可能有许多配置选项的对象时， 该模式会特别有用。
 */

/**
 * Builder类型接口指定了用于创建Product对象的不同部分的方法
 */
interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
  producePartD(name: string): void;
  producePartE(color: string): void;
  producePartF(price: number): void;
}

/**
 * Concrete Builder类遵循Builder接口，并提供构建步骤的特定实现。你的程序可能有几个不同的构建器，实现方式不同
 */
export class ConcreteBuilder implements Builder {
  private product: Product1 | null = null;

  // 新的构建器实例应该包含一个空白的产品对象，该对象将用于进一步的组装
  constructor() {
    this.reset();
  }

  reset() {
    this.product = new Product1();
  }

  /**
   * 所以的生产步骤都是用相同的实例 product
   */
  producePartA(): void {
    this.product?.parts.push("partA1");
  }

  producePartB(): void {
    this.product?.parts.push("partB1");
  }

  producePartC(): void {
    this.product?.parts.push("partC1");
  }
  producePartD(name: string) {
    this.product!.name = name;
  }
  producePartE(color: string) {
    this.product!.color = color;
  }
  producePartF(price: number) {
    this.product!.price = price;
  }
  /**
   * 构建器应该提供他们自己的方法 检索结果。这是因为不同类型的构建器可能会创建 完全不同的产品，不遵循相同的界面
   * 因此，这些方法不能在基本Builder接口中声明
   * 通常，在将最终结果返回给客户端之后，是一个构建器实例
   * 接着一个产品生产完成后，就会立即开始生产下一个产品
   * 所以会在末尾加 reset 方法执行
   */
  getProduct(): Product1 {
    const result = this.product!;
    this.reset();
    return result;
  }
}

/**
 * 只有当你的产品比较安静的时候，使用Builder模式才有意义 结构复杂，需要大量配置。
 * 不同于其他创造模式，不同的建设者可以生产
 * 无关产品。换句话说，不同建设者的结果可能不会
 */
class Product1 {
  parts: string[] = [];
  listParts() {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
    return this.parts.length;
  }
  price: number = 0;
  color: string = "white";
  name: string = "code_01";
}

/**
 * 主管只负责执行特定序列，是可选的，因为客户端可以直接控制生成器
 */
class Director {
  private builder: Builder | null = null;
  /**
   * Director使用客户端代码传递的任何构建器实例得到它，通过这种方式，客户端代码可以改变新对象的最终类型组装产品。
   */
  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  /**
   * 可以使用相同的产品构建多个产品变体
   */
  builderMinimalViableProduct() {
    this.builder?.producePartA();
  }

  builderFullFeatureProduct() {
    this.builder?.producePartA();
    this.builder?.producePartB();
    this.builder?.producePartC();
  }
  /**
   * 这是一款颜色为红色，价格为10，名称为code2的产品
   */
  builderProductPrice() {
    this.builder?.producePartD("code02");
    this.builder?.producePartE("red");
    this.builder?.producePartF(10);
  }
  /**
   * 这是一款颜色为黑色 价格为20 名称为code3的产品
   */
  builderProductColor() {
    this.builder?.producePartD("code3");
    this.builder?.producePartE("black");
    this.builder?.producePartF(20);
  }
  /**
   * 这是一款颜色为蓝色 价格为30 名称为code4的产品
   */
  builderProductName() {}
}

/**
 * 客户端代码创建一个构建器对象，将其传递给主管，然后
 * 启动构造过程。方法检索最终结果
 * 构建器对象
 */
function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Standard basic product:");

  director.builderMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.builderFullFeatureProduct();
  builder.getProduct().listParts();
  // 请记住，Builder模式可以在没有Director类的情况下使用。
  console.log("Custom product:");
  builder.producePartA();
  builder.producePartB();
  builder.getProduct().listParts();
}

export { Director, clientCode };
