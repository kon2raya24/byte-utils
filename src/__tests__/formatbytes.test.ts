import { describe, it, expect } from "vitest";
import { formatBytes } from "../formatbytes";

describe("formatBytes", () => {
  it("should be a function", () => {
    expect(typeof formatBytes).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatBytes(null as any)).toThrow();
  });
});
