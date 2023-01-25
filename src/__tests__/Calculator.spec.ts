import { describe, expect, it } from "vitest";
import { Calculator } from "../Calculator";

describe("Calculator", () => {
  it("should sum two numbers", () => {
    expect(Calculator.sum(2, 2)).toEqual(4);
  });

  it("should subtract two numbers", () => {
    expect(Calculator.min(2, 2)).toEqual(0);
  });

  it("should divide two numbers", () => {
    expect(Calculator.div(2, 2)).toEqual(1);
  });

  it("should throw RangeError", () => {
    expect(() => Calculator.div(2, 0)).toThrow(RangeError);
  });

  it("should multiply two numbers", () => {
    expect(Calculator.multi(2, 2)).toEqual(4);
  });
});
