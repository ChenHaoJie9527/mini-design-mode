import { describe, it, expect } from "vitest";
import { clientCode, Director } from "../design";
import { ConcreteBuilder } from "../design/builder";

describe("test builder", () => {
  it("showld, builder", () => {
    // const director = new Director();
    // clientCode(director);
    const builder = new ConcreteBuilder();
    const director = new Director();
    director.setBuilder(builder);

    // 定制普通产品
    director.builderMinimalViableProduct();
    const lent = builder.getProduct().listParts();
    expect(lent).toBe(1);
  });

  it("special products", () => {
    const builder = new ConcreteBuilder();
    const director = new Director();
    director.setBuilder(builder);
    director.builderFullFeatureProduct();
    const _lent = builder.getProduct().listParts();
    expect(_lent).toBe(3);
  });

  it("Custom product", () => {
    const builder = new ConcreteBuilder();
    builder.producePartA();
    builder.producePartB();
    builder.producePartC();
    const lent = builder.getProduct().listParts();
    expect(lent).toBe(3);
  });

  it("This is a product with a color of red, a price of 10 and a name of code2", () => {
    const builder = new ConcreteBuilder();
    const director = new Director();
    director.setBuilder(builder);
    director.builderProductPrice();
    const product = builder.getProduct();
    expect(product.name).toBe("code02");
    expect(product.price).toBe(10);
    expect(product.color).toBe("red");
  });

  it("This is a product with black color and price of 20 and name code3", () => {
    const builder = new ConcreteBuilder();
    const director = new Director();
    director.setBuilder(builder);
    director.builderProductColor();
    const product = builder.getProduct();
    console.log("product", product);
    expect(product.name).toBe("code3");
    expect(product.price).toBe(20);
    expect(product.color).toBe("black");
  });
});
