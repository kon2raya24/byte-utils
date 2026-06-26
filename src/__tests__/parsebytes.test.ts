import { describe, it, expect } from "vitest";
import { parseBytes } from "../parsebytes";

describe("parseBytes", () => {
  it("should be a function", () => {
    expect(typeof parseBytes).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => parseBytes(null as any)).toThrow();
  });
});
