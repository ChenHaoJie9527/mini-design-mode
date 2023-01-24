import { describe, it, expect } from "vitest";
import {
  ConcreteCreator1,
  ConcreteCreator2,
  clintCodeProduct1,
  clintCodeProduct2,
} from "../design/factoryMethod_test";

describe("test factory method 2", () => {
  it("should productA", () => {
    const productA = new ConcreteCreator1();
    const result = clintCodeProduct1(productA);
    expect(result.name).toBe("马自达");
    expect(result.age).toBe(2016);
  });

  it("should productB", () => {
    const productB = new ConcreteCreator2();
    const result = clintCodeProduct2(productB);
    expect(result.name).toBe("丰田");
    expect(result.age).toBe(2016);
  });
});
