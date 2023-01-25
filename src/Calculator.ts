export class Calculator {
  static sum(a: number, b: number) {
    return a + b;
  }

  static min(a: number, b: number) {
    return a - b;
  }

  static div(a: number, b: number) {
    if (b === 0) {
      throw new RangeError(`Second value can't be 0`);
    }

    return a / b;
  }

  static multi(a: number, b: number) {
    return a * b;
  }
}
