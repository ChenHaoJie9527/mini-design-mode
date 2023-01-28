import { expect, describe, it } from "vitest";
import {
  getMazdaCX5Name,
  MazdaCX5,
  MazdaNewCX5,
  Adapter,
} from "../design/automobileAdapterPattern";

describe("should getMazdaCX5Name", () => {
  it("test oldMazdaCX5Name", () => {
    const target = new MazdaCX5();
    const name = getMazdaCX5Name(target);
    expect(name).toBe("a new generation cx-5");
  });
  it("test newMazdaCX5Name", () => {
    const target = new MazdaNewCX5();
    const name = target.name;
    expect(name).toBe("next generation cx-5");
  })

  it('test adapter MazdaCX5Name', () => {
    const newMazdaCx5 = new MazdaNewCX5();
    const target = new Adapter(newMazdaCx5);
    const result = getMazdaCX5Name(target);
    expect(result).toBe("next generation cx-5");
  })
});
