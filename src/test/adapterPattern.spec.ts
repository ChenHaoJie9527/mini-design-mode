import { expect, describe, it } from "vitest";
import { Adaptee, Adapter, clientCode, Target } from "../design/adapterPattern";

describe("test adapter", () => {
  it("Client: I can work just fine with the Target objects:", () => {
    const target = new Target();
    const result = clientCode(target);
    expect(result).toBe("Target: The default target's behavior");
  });

  it("Client: The Adaptee class has a weird interface. See, I don't understand it:", () => {
    const adaptee = new Adaptee();
    expect(adaptee.specificRequest()).toBe(".eetpadA eht fo roivaheb laicepS");
    // clientCode(adaptee); // error: 类型 "Adaptee" 中缺少属性 "request"，但类型 "Target" 中需要该属性,需要使用适配器转换
  });

  it("Client: But I can work with it via the Adapter:", () => {
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);
    const result = clientCode(adapter);
    expect(result).toBe("Adapter:Special behavior of the Adaptee.");
  });
});
