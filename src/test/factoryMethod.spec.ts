import { describe, it, expect } from "vitest";
import { clintCodeProduct1, clintCodeProduct2, ConcreteCreator1, ConcreteCreator2 } from "../design/factoryMethod";

describe("test factoryMethods", () => {
  it("test product1", () => {
    const creator1 = new ConcreteCreator1();
    const result = clintCodeProduct1(creator1);
    expect(result).toBe("ConcreteProduct1");
  });

  it("test product2", () => {
    const creator2 = new ConcreteCreator2();
    const result = clintCodeProduct2(creator2);
    expect(result).toBe("hello world");
  })
});
