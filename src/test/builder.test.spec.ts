import { describe, it, expect } from "vitest";
import { application, getMakeSportCar } from "../design/builder_test";
describe("test builder-test", () => {
  it("test application", () => {
    const { computer, gps, seats, engine } = application();
    expect(computer).toBe("110");
    expect(gps).toBe("v10");
    expect(seats).toBe(10);
    expect(engine).toBe("v12");
  });

  it("test makeSportCar", () => {
    const { color, priceText, nameText } = getMakeSportCar();
    expect(color).toBe("red");
    expect(priceText).toBe("$110");
    expect(nameText).toBe("hello");
  });
});
