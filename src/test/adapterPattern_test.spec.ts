import { describe, it, expect } from "vitest";
import { Adapter, RestfulRequest } from "../design/adapterPattern_test";

describe("should adapterPattern_test", () => {
  it("test adapterPattern_test", () => {
    const restful = new RestfulRequest();
    const adapter = new Adapter(restful);
    const result = adapter.request();
    expect(result).toBe("restful");
  });
});
