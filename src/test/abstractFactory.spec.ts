import { describe, it, expect } from "vitest";
import {
  clientCodeProductA,
  clientCodeProductA2,
  clientCodeProductB,
  clientCodeProductB2,
  ConcreteFactory1,
  ConcreteFactory2,
} from "../design/abstractFactory";

describe("test AbstractFactory", () => {
  it("test productA", () => {
    const concreteFactory1 = new ConcreteFactory1();
    const productA1 = clientCodeProductA(concreteFactory1);
    const result = productA1.usefulFunctionA();
    expect(result).toBe("A1");

    const concreteFactory2 = new ConcreteFactory2();
    const productA2 = clientCodeProductA2(concreteFactory2);
    const result2 = productA2.usefulFunctionA();
    expect(result2).toBe("A2");
  });

  it("test productB1", () => {
    const concreteFactory1 = new ConcreteFactory1();
    const productB1 = clientCodeProductB(concreteFactory1);
    const result = productB1.usefulFunctionB();
    expect(result).toBe("B1");
  });
  
  it("test, productB2", () => {
    const concreteFactory1 = new ConcreteFactory2();
    const productB2 = clientCodeProductB2(concreteFactory1);
    const result = productB2.usefulFunctionB();
    expect(result).toBe("B2");
  });
});
