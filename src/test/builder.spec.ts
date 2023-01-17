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
    director.builderMinimalViableProduct()
    const lent = builder.getProduct().listParts()
    expect(lent).toBe(1);
  });
});
