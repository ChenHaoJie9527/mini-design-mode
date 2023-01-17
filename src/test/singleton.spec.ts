import { describe, it, expect } from "vitest";
import { Singleton } from "../design";

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
    return true;
  } else {
    console.log("Singleton failed, variables contain different instances.");
    return false;
  }
}

describe("test singleton", () => {
  it("should singleton", () => {
    expect(clientCode()).toBeTruthy();
  });
  it("should singleton code", () => {
    const singleton = Singleton.getInstance();
    expect(singleton.age).toBeTypeOf("number");
    expect(singleton.age).toBe(10);
    singleton.setName("singleton");
    const name = singleton.getName();
    expect(name === "singleton").toBeTruthy();
  });
  it("Tests for the same instance", () => {
    const singleton = Singleton.getInstance();
    const singleton1 = Singleton.getInstance();
    const res = singleton.getName() === singleton1.getName();
    expect(res).toBeTruthy();
  });
});
