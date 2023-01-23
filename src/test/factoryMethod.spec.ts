import { describe, it, expect } from "vitest";
import { clintCodeProduct1, ConcreteCreator1 } from "../design/factoryMethod";

describe("test factoryMethods", () => {
  it("test product1", () => {
    const creator1 = new ConcreteCreator1();
    const result = clintCodeProduct1(creator1);
    expect(result).toBe("ConcreteProduct1");
  });
});
