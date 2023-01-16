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
});
